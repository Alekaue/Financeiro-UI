import { Title } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../../core/model';

import { MessageService } from 'primeng/components/common/messageservice';

=======
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService } from './../pessoa.service';
import { FormControl } from '@angular/forms';
import { Pessoa, Contato } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';

>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();
<<<<<<< HEAD
  estados: any[];
  cidades: any[];
  estadoSelecionado: number;
=======
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017


  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
<<<<<<< HEAD
    private messageService: MessageService,
=======
    private toasty: ToastyService,
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova pessoa');

<<<<<<< HEAD
    this.carregarEstado();

=======
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
  }

<<<<<<< HEAD
  carregarEstado() {
    this.pessoaService.listarEstados()
      .then(lista => {
        this.estados = lista.map(uf => ({ label: uf.nome, value: uf.codigo}));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCidades() {
    this.pessoaService.pesquisarCidade(this.estadoSelecionado)
      .then(lista => {
        this.cidades = lista.map(c => ({ label: c.nome, value: c.codigo}));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

=======
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.buscarPorCodigo(codigo)
      .then( pessoa => {
        this.pessoa = pessoa;
<<<<<<< HEAD

        this.estadoSelecionado = (this.pessoa.endereco.cidade) ?
              this.pessoa.endereco.cidade.estado.codigo : null;
        if (this.estadoSelecionado) {
          this.carregarCidades();
        }
=======
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
        this.atualizarTituloEdicao();
      })
        .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }

  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
      .then(pessoaAdicionada => {
<<<<<<< HEAD
        this.messageService.add({ severity: 'success', detail: 'Pessoa cadastrada com sucesso!'});
=======
        this.toasty.success('Pessoa cadastrada com sucesso!');
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017

        this.router.navigate(['/pessoas', pessoaAdicionada.codigo]);

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa)
      .then( pessoa => {
        this.pessoa = pessoa;

<<<<<<< HEAD
        this.messageService.add({ severity: 'success', detail: 'Pessoa alterada com sucesso!'});
=======
        this.toasty.success('Pessoa alterada com sucesso!');
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
        this.atualizarTituloEdicao();
      })
        .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`);
  }

  novo(form: FormControl) {
    form.reset();
    setTimeout(function() {
      this.pessoa = new Pessoa();
    }.bind(this), 1);

    this.router.navigate(['/pessoas/nova']);
  }

}
