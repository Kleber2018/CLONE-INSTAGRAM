export interface Produto {
  id?: string; // identificador único
  id_empresa: string;
  url_imagem: string; // máximo 250 caracteres
  titulo: string; // máximo 50 caracteres
  descricao: string; // máximo 200 caracteres
  categoria: string; // máximo 30 caracteres (ex: lanche, bebida, combo, etc...)
  status: string; // on, off, oculto, desativado
  preco: any;
  variacao: {
    qtd: number; // qtd de adicionais que pode ser escolhido
    valor_premium: number; // valor dos produto_opc premium
    valor_premium2: number; // valor dos produto_opc premium2
  };
  adicional: {
    qtd: number; // qtd de adicionais que pode ser escolhido
    valor_premium: number;
    valor_premium2: number;
  };
}
