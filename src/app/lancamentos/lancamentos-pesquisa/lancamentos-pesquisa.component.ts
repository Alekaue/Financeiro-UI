import { Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from './../../seguranca/auth.service';
import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';


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
      private toasty: ToastyService,
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
        this.toasty.success('Lançamento excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
