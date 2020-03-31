import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
=======
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017

export class NotAuthenticatedError { }

@Injectable()
export class MoneyHttpInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

      if (!req.url.includes('/oauth/token') && this.auth.isAccessTokenInvalido()) {

      return from(this.auth.obterNovoAccessToken())
          .pipe(
              mergeMap(() => {
                if (this.auth.isAccessTokenInvalido()) {
                  throw new NotAuthenticatedError();
                }
                  req = req.clone({
                      setHeaders: {
                          Authorization: `Bearer ${localStorage.getItem('token')}`
                      }
                  });
                  return next.handle(req);
              })
          );
      }

      return next.handle(req);
  }
}
