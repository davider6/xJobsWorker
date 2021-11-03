import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Storage } from '@ionic/storage';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Worker } from 'src/app/models/worker';
import { RequestFields } from '../models/bo/request-fields';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headersWithoutToken = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor( private http: HttpClient,
               private ionicStorage: Storage,
               private afAuth: AngularFireAuth,
               private authService: AuthService ) { }

  public getEvent ( entity: string, token: string ) {

    let headersToken = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    });

    return this.http.get(
      `${environment.backendUrlBase }/backend-services/${ entity }`,
      { headers: headersToken }
    );
  }

  public postEvent( bodyParam: any, entity: string ) {

    return this.http.post(
      `${ environment.backendUrlBase }/${ entity }`,
      JSON.stringify( bodyParam ),
      { headers: this.headersWithoutToken }
    );
  }

  public postEventWithToken( bodyParam: any, entity: string, token: string ) {

    let headersToken = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    });

    return this.http.post(
      `${ environment.backendUrlBase }/${ entity }`,
      JSON.stringify( bodyParam ),
      { headers: headersToken }
    );
  }

  public putEventWithToken( bodyParam: any, entity: string, token: string ) {

    let headersToken = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    });

    return this.http.put(
      `${ environment.backendUrlBase }/${ entity }`,
      JSON.stringify( bodyParam ),
      { headers: headersToken }
    );
  }

  public externalExists( externalId: string, type: string ){
    return this.http.get(
      `${ environment.backendUrlBase }/externalExists?entity=W&externalId=${ externalId }&type=${ type }`,
      { headers: this.headersWithoutToken }
    );
  }

  public internalExists ( username: string, password: string, type: string ){

    let bodyParam = {
      'entity': 'W',
      password,
      type,
      username
    }

    return this.http.post(
      `${ environment.backendUrlBase }/auth`,
      JSON.stringify( bodyParam ),
      { headers: this.headersWithoutToken }
    );

  }

  public changeWorkerOccupationStatus( workerId: number, occupationId: number, status: boolean, hourlyRate: number, token: string ) {
    const headersToken = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token
    });
    const url = environment.backendUrl + '/workerOcuppations/changeStatusByWorkerIdAndOccupationId?workerId=' + workerId
    + '&occupationId=' + occupationId + '&status=' + status + '&hourlyRate=' + hourlyRate;
    return this.http.post(
      url,
      null,
      { headers: headersToken }
    );

  }

  public getItemsByMethod(
    entity: string,
    method: string,
    fields: RequestFields[],
    token: string
  ) {
    const headersLoc = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });

    let urlFields = "";
    let first = true;
    if (fields && fields.length > 0) {
      for (const field of fields) {
        if (first) {
          urlFields = field.fieldName + "=" + field.fieldValue;
          first = false;
        } else {
          urlFields += "&" + field.fieldName + "=" + field.fieldValue;
        }
      }
    }
    let url = environment.backendUrlBase + "/backend-services/" + entity + "/" + method;
    if (urlFields !== "") {
      url = url + "?" + urlFields;
    }

    // console.log('Consumiendo',url);

    return this.http.get(url, { headers: headersLoc });
  }

  public getItemsByMethodWithoutContext(
    entity: string,
    method: string,
    fields: RequestFields[],
    token: string
  ) {
    const headersLoc = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });

    let urlFields = "";
    let first = true;
    if (fields && fields.length > 0) {
      for (const field of fields) {
        if (first) {
          urlFields = field.fieldName + "=" + field.fieldValue;
          first = false;
        } else {
          urlFields += "&" + field.fieldName + "=" + field.fieldValue;
        }
      }
    }
    let url = "";
    if (method != "") {
      url = environment.backendUrlBase + "/" + entity + "/" + method;
    }else{
      url = environment.backendUrlBase + "/" + entity;
    }

    if (urlFields !== "") {
      url = url + "?" + urlFields;
    }

    // console.log('Consumiendo',url);

    return this.http.get(url, { headers: headersLoc });
  }

  public putItemsByMethod(
    entity: string,
    method: string,
    fields: RequestFields[],
    token: string
  ) {
    const headersLoc = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });
    // console.log(headersLoc);
    
    let urlFields = "";
    let first = true;
    if (fields && fields.length > 0) {
      for (const field of fields) {
        if (first) {
          urlFields = field.fieldName + "=" + field.fieldValue;
          first = false;
        } else {
          urlFields += "&" + field.fieldName + "=" + field.fieldValue;
        }
      }
    }
    let url = environment.backendUrlBase + "/backend-services/" + entity + "/" + method;
    if (urlFields !== "") {
      url = url + "?" + urlFields;
    }

    // console.log('Consumiendo',url);

    return this.http.put(url,JSON.stringify( {} ), { headers: headersLoc });
  }

  cleanStorage() {
    // this.ionicStorage.clear();
    this.ionicStorage.remove('auth-token');
    this.ionicStorage.remove('userId');
    this.ionicStorage.remove('workerObject');
    this.authService.usuario = {};
    // console.log('storage cleaned');
  }

  saveStorage( key: string, value: string ){
    this.ionicStorage.set( key, value );

    if ( key === 'userId' || key === 'auth-token' ){
      sessionStorage.setItem( key, value );
    }
  }

  public updateEntity(entity: string, id: number, object: any, token: string) {
    const headersObj = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });
    return this.http.put(
      environment.backendUrlBase + "/backend-services/" + entity + "/" + id,
      JSON.stringify(object),
      { headers: headersObj }
    );
  }

  signOut(){
    this.afAuth.auth.signOut()
    .then( resp => {
      console.log('succefully signout', resp);
      this.cleanStorage();      
    })
    .catch( err => {
      console.log('error signing out', err);
    });
  }

  getWorkerOcuppationsByWorkerId(workerId: number, token: string) {
    let headersLoc = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });
    const url = environment.backendUrlBase + "/backend-services/workerOcuppations/workerOcuppationsByWorkerId?workerId=" + workerId + "&occupationStatus=true&workerOccupationStatus=true&workerStatus=true";
    return this.http.get(url, { headers: headersLoc });
  }

  public getItemsByMethodCache(
    method: string,
    fields: RequestFields[],
    token: string
  ) {
    const headersLoc = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });

    let urlFields = '';
    let first = true;
    if (fields && fields.length > 0) {
      for (const field of fields) {
        if (first) {
          urlFields = field.fieldName + '=' + field.fieldValue;
          first = false;
        } else {
          urlFields += '&' + field.fieldName + '=' + field.fieldValue;
        }
      }
    }
    let url = environment.backendUrl + '/cache/' + method;
    if (urlFields !== '') {
      url = url + '?' + urlFields;
    }
    return this.http.get(url, { headers: headersLoc });
  }

}
