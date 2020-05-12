export interface Anuncio {
  uid?: string;
  usuario?: {
    nome: string,
    email: string,
    uid: string
  };
  companyInformation?: CompanyInformation;
  conteudo?: {
    categoria?: string;
    ordem?: string;
    descricao?: string,
    img?:[string],
    titulo?: string,
  };
  itens?: [{
    ordem: string,
    titulo: string,
    descricao?: string,
    preco: any,
    desconto?: any
  }];
  updatedAt?: any;
  createdAt?: any;
  status: string; //2-pendende, 3-aceito, 4-cancelado, 4-finalizado
  indexImg?: number;//para utilizar no fronte
 }


 export interface CompanyInformation {
  uid?: string;
  empresaNome?: string;
  descricao?: string;
  ordem: string;
  segmento: string;
  funcionamento?: string;
  whatsApp?: string;
  linkExterno?: string;
  imgPerfil?: string;
  entrega: string;
  formaPagamento?: string;
 }
