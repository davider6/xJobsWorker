import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";

import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from "@ionic-native/file/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { DeleteModalPageModule } from './pages/modals/delete-modal/delete-modal.module';
import { OrdersDetailsPageModule } from './pages/orders-details/orders-details.module';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { DatePipe } from '@angular/common';

import { ImageResizer } from '@ionic-native/image-resizer/ngx';


export const firebaseConfig = {
  apiKey: "AIzaSyCinrx4tqUuECzn46SKiFpIlAoQo4AZado",
  authDomain: "xjobworker.firebaseapp.com",
  databaseURL: "https://xjobworker.firebaseio.com",
  projectId: "xjobworker",
  storageBucket: "xjobworker.appspot.com",
  messagingSenderId: "51878476605",
  appId: "1:51878476605:web:6341886b19fffc580de354"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    DeleteModalPageModule,
    OrdersDetailsPageModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    Camera,
    File,
    PhotoViewer,
    MediaCapture,
    WebView,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Facebook,
    GooglePlus,
    AndroidPermissions,
    OneSignal,
    DatePipe,
    ImageResizer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
