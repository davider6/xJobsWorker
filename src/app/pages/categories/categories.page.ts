import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Categories } from 'src/app/models/categories';
import { ModalController, AlertController } from '@ionic/angular';
import { SubCategoriesPage } from '../sub-categories/sub-categories.page';
import { AuthService } from '../../services/auth.service';
import { zip } from 'rxjs';
import { Storage } from "@ionic/storage";
import { storage } from 'firebase';
import { Router } from '@angular/router';
import { Worker } from 'src/app/models/worker';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  token: string;
  workerId: number;
  worker: Worker;

  constructor( private apiService: ApiService,
               private modalController: ModalController,
               public authService: AuthService,
               private ionicStorage: Storage, 
               private router: Router,
               private alertController: AlertController ) {

                 this.ionicStorage.get('workerObject').then( (value) => {
                   this.worker = JSON.parse(value);
                   console.log('workerObject', value);
                 });

                 this.ionicStorage.get('userId').then( (value) => {
                   this.workerId = (value as number);
                   console.log('userId', value);
                 });
                 
                ionicStorage.get('token').then( (val) => {
                  console.log('token',val);
                  this.token = val;
                  this.loadCategories();
                });

  }

  ngOnInit() {
  }

  loadCategories(){

    // console.log('categories token',this.token);

    this.apiService.getEvent( 
        'categories', 
        this.token )
        .subscribe( (data: Categories[]) => {
          this.authService.categories = data;
        },
        error => {
          console.log(error);
        });
  }

  async presentModal( categoryId: number, categoryName: string, categoryImage: string ) {

    let index = -1;

    this.authService.categories.forEach((cat, idx) => {
      if(Number(cat['id']) === categoryId) {
        index = idx;
      }
    }); 

    const modal = await this.modalController.create({
      component: SubCategoriesPage,
      cssClass: 'my-custom-class',
      componentProps: {
        index,
        categoryId,
        categoryName,
        categoryImage
      }
    });

    modal.onDidDismiss().then( closed => {
      
      this.authService.categories.forEach( ( cat, index ) => {
        if ( cat['id'] === closed['data'].categoryId ){
          this.authService.categories[index].occSelected = closed['data'].occSelected;
        }
      });
    })
    .catch( err => {
      console.log('err',err);
    });

    return await modal.present();
  }

  saveSelection(){
    
    let categoriesSelected: Categories[] = this.authService.categories.filter( cat => cat.occSelected > 0);

    if ( !categoriesSelected || categoriesSelected.length === 0 ){
      this.presentAlert('Debe seleccionar al menos una ocupación en la cual tiene experiencia', false);
      return;
    }

    // console.log('categoriesSelected', categoriesSelected);

    categoriesSelected.forEach( (cat) => {

      let occupations = cat.occupations.filter( category => category.selected );

      // console.log('occupations', occupations);

      occupations.forEach( (occ) => {

        let bodyParam = {
          "hourlyRate": 40,
          "id": {
            "occupationId": occ.occupationId,
            "workerId": this.workerId
          },
          "occupationId": occ.occupationId,
          "rate": 5,
          "status": true,
          "workerId": this.workerId
        };

        // console.log('alta de occupaciones', bodyParam);

        this.apiService.postEventWithToken(
          bodyParam,
          `backend-services/workerOcuppations`,
          this.token
        ).subscribe( resp => {
          // console.log(resp);
        }, (err) => {
          console.log('error en alta de ocupaciones', err);
        });

      });

    });

    console.log("this.worker.firstLogin: "+this.worker.firstLogin);

    if ( this.worker.firstLogin ){
      
      this.worker.firstLogin = Boolean(false);

      console.log( 'worker a actualizar', this.worker );

      this.apiService.putEventWithToken(
        this.worker,
        `backend-services/workers/${ this.workerId }`,
        this.token
      ).subscribe( resp => {

        console.log('actualizando firstLogin', resp);

        this.router.navigate(['/home']);
      }, (err) => {
        console.log('error en alta de ocupaciones', err);
      });

    } else {
      this.router.navigate(['/home']);
    }

    

    

    

  }

  async presentAlert( message: any , back: boolean) {
    const alert = await this.alertController.create({
      header: 'Selección de Ocupaciones',
      subHeader: 'Jobs Exchange',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    if (back)
      this.router.navigate(['/home']);
  }

}
