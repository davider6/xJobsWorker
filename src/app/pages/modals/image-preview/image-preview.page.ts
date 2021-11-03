import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.page.html',
  styleUrls: ['./image-preview.page.scss'],
})

export class ImagePreviewPage implements OnInit {
  img: any;
  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  @ViewChild('slider', { read: ElementRef }) slider: ElementRef;

  constructor(
              private navParams: NavParams,
              private modalController: ModalController
  ) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean){
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn){
      zoom.in();
    } else{
      zoom.out();
    } 
  }

  close(){
    this.modalController.dismiss();
  }

}
