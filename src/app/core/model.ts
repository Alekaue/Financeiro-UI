<<<<<<< HEAD
export class Estado {
  codigo: number;
  nome: string;
}

export class Cidade {
  codigo: number;
  nome: string;
  estado = new Estado();
}

=======
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
<<<<<<< HEAD
  cidade = new Cidade();
=======
  cidade: string;
  estado: string;
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
}

export class Contato {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;

  constructor(codigo?: number, nome?: string,
      email?: string, telefone?: string) {
        this.codigo = codigo;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;

  }
}

export class Pessoa {
  codigo: number;
  nome: string;
  endereco = new Endereco();
  ativo = true;
  contatos = new Array<Contato>();
}
export class Categoria {
  codigo: number;
}

export class Lancamento {
  codigo: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}
<<<<<<< HEAD

=======
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
