import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
<<<<<<< HEAD

import { MessageService } from 'primeng/components/common/messageservice';

=======
import { ToastyService } from 'ng2-toasty';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
import { NotAuthenticatedError } from './../seguranca/money-http-interceptor';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
<<<<<<< HEAD
    private messageService: MessageService,
=======
    private toasty: ToastyService,
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
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
<<<<<<< HEAD
    this.messageService.add({ severity: 'error', detail: msg});
=======
    this.toasty.error(msg);
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
  }
}
