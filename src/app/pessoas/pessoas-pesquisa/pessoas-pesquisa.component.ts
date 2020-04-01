import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService, PessoaFiltro } from '../pessoa.service';

import { Table } from 'primeng/table';
import { MessageService } from 'primeng/components/common/messageservice';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';


@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  implements OnInit {

    totalRegistros = 0;
    filtro = new PessoaFiltro();
    pessoas = [];
    @ViewChild('tabela', {static: true}) grid: Table;

    constructor(
      private pessoaService: PessoaService,
      private errorHandler: ErrorHandlerService,
      private messageService: MessageService,
      private confirmation: ConfirmationService,
      private title: Title
      ) {}


    ngOnInit() {
      this.title.setTitle('Pesquisa pessoas');
    }

    pesquisar(pagina = 0) {
      this.filtro.pagina = pagina;
      this.pessoaService.pesquisar(this.filtro)
            .then(resultado  => {
              this.totalRegistros = resultado.total;
              this.pessoas = resultado.pessoas;
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event.first / event.rows;
      this.pesquisar(pagina);
    }

    confirmaExclusao(pessoa: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
          this.excluir(pessoa);
        }
      });

    }
    excluir(pessoa: any) {
      this.pessoaService.excluir(pessoa.codigo)
        .then(() => {
          this.grid.reset();
          this.messageService.add({severity: 'success', detail: 'Pessoa excluida com sucesso!'});
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    alternarStatus(pessoa: any): void {
      const novoStatus = !pessoa.ativo;
      this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
        .then(() => {
          const acao = novoStatus ? 'ativada' : 'desativada';
          pessoa.ativo = novoStatus;
          this.messageService.add({severity: 'success', detail: `Pessoa ${acao} com sucesso!`});
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
}
