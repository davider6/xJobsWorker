import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Worker } from '../../models/worker';
import { ApiService } from '../../services/api.service';
import { id } from '@swimlane/ngx-datatable';
import { WorkerOccupationDTO } from '../../models/dto/WorkerOcuppationDTO';
import { Categories } from '../../models/bo/Categories';
import { CategoryOccupationDTO } from '../../models/dto/CategoryOccupationDTO';
import { RequestFields } from '../../models/bo/request-fields';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.page.html',
  styleUrls: ['./edit-worker.page.scss'],
})
export class EditWorkerPage implements OnInit {
  workerOccupations: WorkerOccupationDTO[];
  workerObje: Worker;
  token: string;
  isLoaded = false;
  categories: Categories[];
  categoryOccupations: CategoryOccupationDTO[] = [];
  selCategoryId: string;
  selOccupationsId: string;
  selRate: number;
  constructor( private alertController: AlertController,
               private router: Router,
               private ionicStorage: Storage,
               private api: ApiService ) {
                this.clean();
                if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras
                      && this.router.getCurrentNavigation().extras.state) {
                    this.token = this.router.getCurrentNavigation().extras.state.token;
                    this.workerObje = this.router.getCurrentNavigation().extras.state.worker;
                    if (this.workerObje && this.workerObje.id) {
                      this.api.getWorkerOcuppationsByWorkerId( this.workerObje.id, this.token )
                      .subscribe( (resp: WorkerOccupationDTO[]) => {
                          this.workerOccupations = resp;
                          this.api
                              .getItemsByMethodCache('categories', null, this.token)
                              .subscribe(
                                (respCat: Categories[]) => {
                                  this.categories = respCat;
                                  this.categoryOccupations = [];
                                  this.isLoaded = true;
                                },
                                (error2) => {
                                  console.error(JSON.stringify(error2));
                                }
                              );
                      });
                    } else {
                      this.router.navigate(['/home']);
                    }
                  } else {
                    this.router.navigate(['/home']);
                  }
  }

  ngOnInit() {
  }

  register() {
    if ( !this.workerObje.fullName || this.workerObje.fullName == '' ){
      this.presentAlert('No ha ingresado su nombre.', false);
      return;
    }else if ( !this.workerObje.telephoneNumber || this.workerObje.telephoneNumber == '' ){
      this.presentAlert('No ha ingresado el número de teléfono.', false);
      return;
    }else if ( !this.workerObje.email || this.workerObje.email == '' ){
      this.presentAlert('No ha ingresado un email válido.', false);
      return;
    }else if ( !this.workerObje.zipCode || this.workerObje.zipCode == '' ){
      this.presentAlert('No ha ingresado un zip code válido.', false);
      return;
    }else if ( this.workerObje.englishLevel === null || this.workerObje.englishLevel === '' ){
      this.presentAlert('No ha seleccionado el nivel de inglés.', false);
      return;
    }else{
      this.api.updateEntity('workers', this.workerObje.id, this.workerObje, this.token).subscribe(
        respv2 => {
          this.ionicStorage.set("workerObject", JSON.stringify(this.workerObje));
          this.presentAlert('Datos actualizados con exito.', true);
        }, error2 => {
          this.presentAlert('Ocurrio un error al actualizar datos.', false);
          console.error(JSON.stringify(error2));
        }
      );
    }
  }

  saveOccupation() {
    if (!this.selCategoryId || this.selCategoryId == '') {
      this.presentAlert('Debe seleccionar categoria.', false);
      return;
    } else if (!this.selOccupationsId || this.selOccupationsId == '') {
      this.presentAlert('Debe seleccionar sub categoria.', false);
      return;
    }  else if (!this.selRate || this.selRate < 1) {
      this.presentAlert('Debe ingresar tarifa valida.', false);
      return;
    }
    let found = false;
    if (this.workerOccupations && this.workerOccupations.length > 0){
        for (const currentOc of this.workerOccupations ){
          if (currentOc.occupationId == Number(this.selOccupationsId)) {
            found = true;
          }
        }
    }
    if (found) {
      this.presentAlert('Sub categoria ya asignada.', false);
      return;
    }
    let bodyParam = {
      "hourlyRate": this.selRate,
      "id": {
        "occupationId": this.selOccupationsId,
        "workerId": this.workerObje.id
      },
      "occupationId": this.selOccupationsId,
      "rate": 5,
      "status": true,
      "workerId": this.workerObje.id
    };

    this.api.postEventWithToken(
      bodyParam,
      `backend-services/workerOcuppations`,
      this.token
    ).subscribe( respSave => {
      this.clean();
      this.presentAlert('Se ha asociado la ocupacion.', false);
      this.api.getWorkerOcuppationsByWorkerId( this.workerObje.id, this.token )
                      .subscribe( (resp: WorkerOccupationDTO[]) => {
                        this.workerOccupations = resp;
      });
    }, (err) => {
      console.log('error en alta de ocupaciones', err);
    });
  }

  deleteOccupation(wo: WorkerOccupationDTO) {
    this.api.changeWorkerOccupationStatus(wo.workerId, wo.occupationId, false, wo.hourlyRate, this.token).subscribe( (respUpd: any) => {
        this.presentAlert('Ocupacion eliminada.', false);
        this.api.getWorkerOcuppationsByWorkerId( this.workerObje.id, this.token )
            .subscribe( (resp: WorkerOccupationDTO[]) => {
                this.workerOccupations = resp;
        });
    }, error2 => {
      this.presentAlert('Ocurrio un error al eliminar ocupacion.', false);
      console.error(JSON.stringify(error2));
    });
  }

  categoryChange() {
    this.loadOccupations(this.selCategoryId);
  }

  loadOccupations(categoryId: string) {
    this.selOccupationsId = null;
    this.categoryOccupations = [];
    const reqField: RequestFields[] = [
      { fieldName: 'categoryId', fieldValue: categoryId },
    ];

    this.api
      .getItemsByMethodCache(
        'categoryOccupationsByCategoryId',
        reqField,
        this.token
      ).subscribe((data: CategoryOccupationDTO[]) => {
        this.categoryOccupations = data;
      });
  }

  clean() {
    this.categoryOccupations = [];
    this.selCategoryId = null;
    this.selOccupationsId = null;
    this.selRate = null;
  }

  returnHome(){
    this.clean();
    this.router.navigate(['/home']);
  }

  async presentAlert( messageStr: any , back: boolean) {
    const alert = await this.alertController.create({
      header: 'Actualizacion de Datos',
      subHeader: 'Jobs Exchange',
      message: messageStr,
      buttons: ['OK']
    });

    await alert.present();

    if (back) {
      this.router.navigate(['/home']);
    }
  }

}
