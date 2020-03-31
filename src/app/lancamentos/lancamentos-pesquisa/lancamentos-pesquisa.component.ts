<<<<<<< HEAD
=======
import { Table } from 'primeng/table';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from './../../seguranca/auth.service';
import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

<<<<<<< HEAD
import { Table } from 'primeng/table';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
=======
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  @ViewChild('tabela', {static: true}) grid: Table;

  lancamentos = [];
  constructor(
      private lancamentoService: LancamentoService,
      private auth: AuthService,
<<<<<<< HEAD
      private messageService: MessageService,
=======
      private toasty: ToastyService,
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
      private confirmation: ConfirmationService,
      private errorHandler: ErrorHandlerService,
      private title: Title
      ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de lançamento');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });

  }

  excluir(lancamento: any) {

    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.grid.reset();
<<<<<<< HEAD
        this.messageService.add({ severity: 'success', detail: 'Lançamento excluido com sucesso!'});
=======
        this.toasty.success('Lançamento excluido com sucesso!');
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
