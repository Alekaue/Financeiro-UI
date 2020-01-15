import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { NotAuthenticatedError } from './../seguranca/money-http-interceptor';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService,
    private router: Router
    ) { }

  handle(errorResponse: any) {
    let msg: string;
    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);
    } else if (errorResponse instanceof Response
        || errorResponse.status >= 400 && errorResponse.status <= 499) {
      console.log('Ocorreu um erro ao processar sua solicitação', errorResponse);
      msg = 'Ocorreu um erro ao processar a sua solicitação.';

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar essa ação!';
      }
    } else {
       msg = 'Erro ao processar serviço remoto. Tente novamente';
       console.log('Ocorreu um erro ' +  errorResponse);
     }
    this.toasty.error(msg);
  }
}
