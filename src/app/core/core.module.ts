<<<<<<< HEAD
=======
import { ErrorHandlerService } from './error-handler.service';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
<<<<<<< HEAD
import { JwtHelperService } from '@auth0/angular-jwt';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
=======

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';
import { ToastyModule } from 'ng2-toasty';
import { JwtHelperService } from '@auth0/angular-jwt';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017

import { PessoaService } from '../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { CategoriaService } from '../categorias/categoria.service';
import { RelatoriosService } from './../relatorios/relatorios.service';
<<<<<<< HEAD
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './../seguranca/auth.service';

import { NavbarComponent } from './navbar/navbar.component';
=======

import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './../seguranca/auth.service';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent],
    exports: [
      NavbarComponent,
<<<<<<< HEAD
      GrowlModule,
=======
      ToastyModule,
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
      ConfirmDialogModule
    ],
    providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    RelatoriosService,
    ErrorHandlerService,
    AuthService,

    ConfirmationService,
<<<<<<< HEAD
    MessageService,
=======
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
    JwtHelperService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    imports: [
    CommonModule,
    RouterModule,

<<<<<<< HEAD
    GrowlModule,
=======
    ToastyModule.forRoot(),
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
    ConfirmDialogModule,

  ]
})
export class CoreModule { }
