import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { OccupationsByCategory } from 'src/app/models/occ-category';
import { AuthService } from '../../services/auth.service';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.page.html',
  styleUrls: ['./sub-categories.page.scss'],
})
export class SubCategoriesPage implements OnInit {

  // Data passed in by componentProps
  @Input() index: number;
  @Input() categoryId: number;
  @Input() categoryName: string;
  @Input() categoryImage: string;

  subCategoriesUrl: string = 'categoryCategoryOccupations/categoryOccupationsByCategoryId?categoryId=';

  occupations: OccupationsByCategory;
  token: string;

  constructor( public modalCtrl: ModalController,
               private apiService: ApiService,
               public authService: AuthService,
               private ionicStorage: Storage ) { 

                ionicStorage.get('token').then( (val) => {
                  this.token = val;
                  this.subCategoriesUrl += this.categoryId;
                  this.loadSubcategories();
                });

               }

  ngOnInit() {    
  }

  loadSubcategories(){

    //La primera vez se debe cargar desde
    if ( !this.authService.categories[this.index].occupations ){
      this.apiService.getEvent( 
        this.subCategoriesUrl,
        this.token )
      .subscribe( (resp: OccupationsByCategory[]) => {
          this.authService.categories[this.index].occupations = resp;
      }, err => {
        console.log('error cargando subcategorias', err);
      });

    }
  }

  dismiss() {

    let selected = this.authService.categories[this.index].occupations.filter( x => x.selected);

    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true,
      'categoryId': this.categoryId,
      'occSelected': selected.length
    });
  }

  selectOccupation( occupationId: number ){
    
    this.authService.categories[this.index].occupations.forEach((occ, idx) => {
        if(occ.occupationId === occupationId) {
          this.authService.categories[this.index].occupations[idx].selected = !this.authService.categories[this.index].occupations[idx].selected;
        }
    });
    
    // let occ = this.authService.occupations.find( record => record['occupationId'] === occupationId);
    // occ.selected = !occ.selected;
  }

}
