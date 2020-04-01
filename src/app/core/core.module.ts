import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';

import { PessoaService } from '../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { CategoriaService } from '../categorias/categoria.service';
import { RelatoriosService } from './../relatorios/relatorios.service';
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './../seguranca/auth.service';

import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent],
    exports: [
      NavbarComponent,
      GrowlModule,
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
    MessageService,
    JwtHelperService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    imports: [
    CommonModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,

  ]
})
export class CoreModule { }
