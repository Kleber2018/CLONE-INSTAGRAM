export interface Anuncio {
  uid?: string;
  usuario?: any;
  empresaNome?: string;
  categoria: string;
  ordem: string;
  funcionamento?: string,
  anuncio?: {
    linkExterno?: string,
    descricao?: string,
    img?:[string],
    titulo?: string,
    entrega?: string, 
  };
  itens?: [{
    ordem: string,
    titulo: string,
    descricao?: string,
    preco: any,
    desconto?: any
  }]
  updatedAt?: any;
  createdAt?: any;
  status: string; //2-pendende, 3-aceito, 4-cancelado, 4-finalizado
  indexImg?: number;//para utilizar no fronte
 }
