import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(private router: Router,
              private ionicStorage: Storage) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.ionicStorage.get('token').then((result) => {
        if (result) {
          try{
            if (!helper.isTokenExpired(result)) {
              resolve(true);
            } else {
              this.ionicStorage.clear();
              this.router.navigate(['/login']);
              resolve(false);
            }

          }catch (error) {
            console.error(JSON.stringify(error));
            this.ionicStorage.get('welcomepage').then((result2) => {
              if (result2) {
                this.ionicStorage.clear();
                this.router.navigate(['/login']);
                resolve(false);
              } else {
                this.ionicStorage.clear();
                this.router.navigate(['/welcome']);
                resolve(false);
              }
            });
          }
          // const decoded = helper.decodeToken(result);
          // console.log('decoded ', decoded);
        }  else {
          this.ionicStorage.get('welcomepage').then((result2) => {
            if (result2) {
              this.ionicStorage.clear();
              this.router.navigate(['/login']);
              resolve(false);
            } else {
              this.ionicStorage.clear();
              this.router.navigate(['/welcome']);
              resolve(false);
            }
          });
        }
      })
      .catch (err => console.log(err));

    });
  }
}

