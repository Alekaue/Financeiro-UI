<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LancamentoService } from './../lancamento.service';
import { PessoaService } from './../../pessoas/pessoa.service';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

import { Lancamento } from 'src/app/core/model';
import { MessageService } from 'primeng/components/common/messageservice';

=======
import { Title } from '@angular/platform-browser';
import { LancamentoService } from './../lancamento.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PessoaService } from './../../pessoas/pessoa.service';
import { Component, OnInit } from '@angular/core';

import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Lancamento } from 'src/app/core/model';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];

  pessoas = [];

  // lancamento = new Lancamento();
  formulario: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private lancamentoService: LancamentoService,
<<<<<<< HEAD
    private messageService: MessageService,
=======
    private toasty: ToastyService,
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.configurarFormulario();

    const codigoLancamento = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo lançamento');

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento);
    }
    this.carregarCategorias();
    this.carregarPessoas();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      tipo: [ 'RECEITA' , Validators.required],
      dataVencimento: [null, Validators.required],
      dataPagamento: [],
      descricao: [null, [this.validarObrigatoriedade, this.validarTamanhoMinimo(5)]],
      valor: [null, Validators.required],
      pessoa: this.formBuilder.group({
        codigo: [null, Validators.required],
        nome: []
      }),
      categoria: this.formBuilder.group({
        codigo: [null, Validators.required],
        nome: []
      }),
      observacao: []

    });
  }

  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
<<<<<<< HEAD
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor }};
    };
=======
      return (!input.value || input.value.length >= valor ? null : { tamanhoMinimo: { tamanho: valor }})
    }
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
  }

  get editando() {
    return Boolean(this.formulario.get('codigo').value);
  }

  carregarLancamento(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
      .then( lancamento => {
        // this.lancamento = lancamento;
        this.formulario.patchValue(lancamento);
        this.atualizarTituloEdicao();
      })
        .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.editando) {
      this.atualizarLancamento();
    } else {
      this.adicionarLancamento();
    }
  }

  adicionarLancamento() {
     this.lancamentoService.adicionar(this.formulario.value)
        .then( lancamentoAdicionado => {
<<<<<<< HEAD
          this.messageService.add({ severity: 'success', detail: 'Lançamento adiciondo com sucesso!'});
=======
          this.toasty.success('Lançamento adiciondo com sucesso!');
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017

          this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);

        })
        .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarLancamento() {
    this.lancamentoService.atualizar(this.formulario.value)
      .then(lancamento => {
        // this.lancamento = lancamento;
        this.formulario.patchValue(lancamento);
<<<<<<< HEAD
        this.messageService.add({ severity: 'success', detail: 'Lancamento alterado com sucesso!'});
=======
        this.toasty.success('Lancamento alterado com sucesso!');
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarCategorias() {
    this.categoriaService.listarTodas().then(categorias => {
      this.categorias = categorias.map(c => ({ label: c.nome, value: c.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    this.pessoaService.listarTodas().then(pessoas => {
      this.pessoas = pessoas.map(p => ({ label: p.nome, value: p.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    setTimeout(function() {
      this.lancamento = new Lancamento();
    }.bind(this), 1);

    this.router.navigate(['/lancamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.formulario.get('descricao').value}`);
  }
}
