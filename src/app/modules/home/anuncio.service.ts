import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Anuncio } from './anuncio.model';


@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private anuncioCollection: AngularFirestoreCollection<Anuncio>;
  private anuncioWhereCollection: AngularFirestoreCollection<Anuncio>;
  private enumCollection: AngularFirestoreCollection<any>;

  constructor(protected db: AngularFirestore,
              protected where: AngularFirestore) {
      this.anuncioCollection = db.collection<Anuncio>('anuncio');
      this.enumCollection = db.collection<any>('enum');
    }

    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

    getTimeZone() {
      return new Date().toString()
    }

    //INSERT
    public addAnuncio(anuncio: Anuncio) {
      return this.anuncioCollection.add({
        ...anuncio,
        status: '1-pendente',
        updatedAt: this.timestamp,
        createdAt: this.timestamp
      })
      .then(() => console.log('salvo com sucesso'))
      .catch(er => console.error('erro no slavar gestor', er));
    }

    // GET TODOS OS ANUNCIOS
    public getAnuncios() {
      return this.anuncioCollection.snapshotChanges(); // mantem atualizado em realtime
    }

    //GET UM ANUNCIO ESPECÍFICO
    public getAnuncio(id: string): Observable<Anuncio> {
      return this.anuncioCollection.doc<Anuncio>(id).valueChanges();
    }



// ---------------------------------------------------------------------------------
// EXEMPLOS DE CÓDIGO
// ---------------------------------------------------------------------------------
    // // LOCAL
    // setLocalSolicitacao(solicitacao: Solicitacao) {
    //   if(solicitacao.createdAt == ''){ //para ter o horário do inicio do pedido
    //     solicitacao.createdAt = this.getTimeZone();  
    //   }
    //   localStorage.setItem('solicitacao', JSON.stringify(solicitacao));
    // }


    // // SESSION
    // setSessionItem(item: Itempedido) {
    //   sessionStorage.setItem('itempedido', JSON.stringify(item));
    // }





    // public getAnuncios(status: string): Observable<DocumentChangeAction<Anuncio>[]> {

    //   // var dataLocalInic = new Date(dataInic);
    //   // var diaI = dataLocalInic.getDate();
    //   // var mesI = dataLocalInic.getMonth();
    //   // var anoI = dataLocalInic.getFullYear();
  
    //   // var dataLocalFim = new Date(dataFim);
    //   // var diaF = 1 + dataLocalFim.getDate();
    //   // var mesF = dataLocalFim.getMonth();
    //   // var anoF = dataLocalFim.getFullYear();
      
    //   // var timestampInic= firebase.firestore.Timestamp.fromDate(new Date(anoI,mesI,diaI))
    //   // var timestampFim= firebase.firestore.Timestamp.fromDate(new Date(anoF,mesF,diaF))

    //   this.anuncioWhereCollection = this.where.collection('anuncio', ref => ref
    //   .where('status', '==', status));

    //   return this.anuncioWhereCollection.snapshotChanges();
    // }

    //   //1-pendende, 2-aceito, 3-cancelado
    // public async updtStatusSolicitacao(idSolicitacao: string, status: string, statusBefore: string){
    //   console.log(status)
    //   if(status=='2-aceito' && statusBefore == '1-pendente'){
    //     var numero = await this.getNumAnuncio('numero_sse').pipe(first()).toPromise().then(res => {
    //       return res.numero;
    //     });
    //     this.enumCollection.doc<any>('numero_sse').update({
    //       numero: firebase.firestore.FieldValue.increment(1)
    //     })
    //     return this.anuncioCollection.doc(idSolicitacao).update({'status' : status, 'referencia': numero, 'updatedAt' : this.timestamp});
    //   }else {
    //     return this.anuncioCollection.doc(idSolicitacao).update({'status' : status, 'updatedAt' : this.timestamp});
    //   }
    // }


  




    // public sfDocRef: any;
    // criando pedido
    // async addPedido(solicitacao: Solicitacao) {
    //      return  await this.empresasCollection.doc<Empresa>(pedido.id_empresa).get().toPromise().then(
    //         snapshot => {
    //           let retorno = 'erro'
    //           if(snapshot.exists){
    //             if(!snapshot.metadata.fromCache){
    //                 if(snapshot.data().status == '1-on'){

    //                   // console.log('empresa online')
    //                   retorno = 'salvo'
    //                 } else {
    //                   retorno = 'empresaOff';
    //                   // console.log('empresa offline')
    //                 }
    //                 // snapshot.data
    //             } else {
    //               retorno = 'offline';
    //               // console.log('vem do cach')
    //             }
    //           } else {
    //             retorno = 'erro';
    //           }
    //           if(retorno == 'salvo'){
    //             // console.log('dentro o if')
    //             this.pedidosCollection.add({
    //               ...pedido,
    //                 log_criado: this.timestamp
    //             }).catch((erro: any) => {
    //               console.log('erro 33', erro);
    //               return 'erro';
    //               });
    //           }
    //           return retorno
    //         }
    //         // e.payload.doc.data().categoria,
    //       )
    //       // console.log('fora', valor);
    //       const timestamp = this.timestamp;
    //       return this.pedidosCollection.add({
    //         ...pedido,
    //           log_criado: timestamp
    //       }).catch((erro: any) => {
    //         console.log('erro 33', erro);
    //         return false;
    //         });
    

    //       // try {
    //       //   await this.empresaService.getEmpresa(this.pedido.id_empresa).pipe(first()).toPromise().then(res => {
    //       //     console.log('res no then do pedido', res);
    //       //     if(res){
    //       //       retornoOk = true
    //       //       empresaVerifica = res
    //       //     } else {
    //       //       retornoOk = false
    //       //     }
    //       //   });
    //       // } catch (error) {
    //       //   console.log('307',error)
    //       // }
    // // })



      // funcionando
      // this.empresasCollection.doc<Empresa>(pedido.id_empresa).get().toPromise().then(
      //   snapshot => {
      //     vemDoCache = snapshot.metadata.fromCache
      //     console.log(snapshot.metadata.fromCache)
      //     if(snapshot.exists){
      //       if(!snapshot.metadata.fromCache){
      //           if(snapshot.data().status == '1-on'){
      //             console.log('empresa online')
      //           } else {
      //             console.log('empresa offline')
      //           }
      //           // snapshot.data
      //         console.log('vem da internet', snapshot.exists,  snapshot.id, snapshot.data().status)
      //       } else {
      //         console.log('vem do cach')
      //       }
      //   }
      //   },
      //   // e.payload.doc.data().categoria,
      // )
      // this.pedidosCollection.add({
      //   ...pedido,
      //     log_criado: this.timestamp
      // })

    //   var sfDocRef =  await this.empresasCollection.doc<Empresa>(pedido.id_empresa);

    //    return firebase.firestore().runTransaction(function(transaction) {
    //     // This code may get re-run multiple times if there are conflicts.
    //     return transaction.get(sfDocRef).then(function(sfDoc) {
    //         if (!sfDoc.exists) {
    //           console.log('documento não existe')
    //           return false
    //             throw "Documento não existe";
    //         } else {
    //           this.pedidosCollection.add({
    //               ...pedido,
    //                 log_criado: this.timestamp
    //             })
    //             return true
    //         }
    
    //         // Add one person to the city population.
    //         // Note: this could be done without a transaction
    //         //       by updating the population using FieldValue.increment()
    //         // var newPopulation = sfDoc.data().population + 1;
    //         // transaction.update(sfDocRef, { population: newPopulation });
    //     });
    // }).then(function() {
    //     console.log("Transaction successfully committed!");
    //     return false;
    // }).catch(function(error) {
    //     console.log("Transaction failed: ", error);
    //     return false;
    // });

      // var batch = firebase.firestore().batch();

      // const timestamp = this.timestamp;
      // batch.set(null,
      // this.pedidosCollection.add({
      //   ...pedido,
      //     log_criado: timestamp
      // }))
      // batch.commit().then(function () {
      //   return true;
      // }).catch (error => {
      //   return false;
      // });
      // var batch = this.db.batch();
      // return this.pedidosCollection.add({
      //   ...pedido,
      //     log_criado: timestamp
      // })

      










    // }

    // 1 - pendente(log_criado),
    // 2 - execução(log_aceito),
    // 3 - pronto(log_preparado),
    // 4 - finalizado(log_finalizado), 5- cancelado(log_finalizado)
    // updtStatusPedido(status: string, id: string) {
    //   const timestamp = this.timestamp;

    //   if (status == '3') {
    //     return this.pedidosCollection.doc(id).update({'status' : status, 'log_preparado': timestamp}).then(function() {
    //       console.log('Alterado status con sucesso');
    //     });
    //   } else if (status == '4' || status == '5') {
    //     return this.pedidosCollection.doc(id).update({'status' : status, 'log_finalizado': timestamp}).then(function() {
    //       console.log('Alterado status con sucesso');
    //     });
    //   } else {
    //     return this.pedidosCollection.doc(id).update({'status' : status, 'log_aceito': timestamp}).then(function() {
    //       console.log('Alterado status con sucesso');
    //     });
    //   }
    // }




    // getPedidoWhere(campo, operador, valor: string): any {
    //   this.pedidosWhereCollection = this.where.collection('solicitacao', ref => ref.where(campo, operador, valor));
    //   return this.pedidosWhereCollection.snapshotChanges();
    // }

    // getPedidoPendenteWhere(campo, operador, valor: string): any {


    //   this.pedidosWhereCollection = this.where.collection('pedido', ref => ref
    //                                                                 .where(campo, operador, valor)
    //                                                                 .where('status', '<', '4'));
    //   // console.log('no service', this.pedidosWhereCollection.valueChanges().pipe(first()).toPromise().then(res => {
    //   //   console.log(res.length)
    //   //   return res
    //   // }))
    //   return this.pedidosWhereCollection.snapshotChanges();
    // }

    // // getPedidoPendenteWhereQtd(campo, operador, valor: string){
    // //   this.pedidosWhereCollection = this.where.collection('pedido', ref => ref
    // //                                                                 .where(campo, operador, valor)
    // //                                                                 .where('status', '<', '4'));
    // //   // console.log('no service', this.pedidosWhereCollection.valueChanges().pipe(first()).toPromise().then(res => {
    // //   //   console.log(res.length)
    // //   //   return res
    // //   // }))
    // //   // return this.pedidosWhereCollection.valueChanges();
    // //   // return this.pedidosWhereCollection.snapshotChanges().pipe(
    // //   //   map(doc => {
    // //   //       const data = doc;
    // //   //       return data;
    // //   //     }
    // //   //   )
    // //   // )

    // //   return this.pedidosWhereCollection.snapshotChanges();
    // // }

    // // pedidosPendentes: Observable<any[]>;
    // // getPedidoPendenteWhereQtd(campo, operador, valor: string): any {
    // //   this.pedidosWhereCollection = this.where.collection('pedido', ref => ref
    // //                                                                 .where(campo, operador, valor)
    // //                                                                 .where('status', '<', '4'));
    // //   // console.log('no service', this.pedidosWhereCollection.valueChanges().pipe(first()).toPromise().then(res => {
    // //   //   console.log(res.length)
    // //   //   return res
    // //   // }))

    // //  this.pedidosPendentes = this.pedidosWhereCollection.snapshotChanges().pipe(
    // //     map(actions => {
    // //       return actions.map(a => {
    // //         const data = a.payload.doc.data();
    // //         // const id = a.payload.doc.id;
    // //         console.log('dentro', a, data)
    // //         return a;
    // //       });
    // //     })
    // //   );
    // //     console.log(this.pedidosPendentes);

    // //   return this.pedidosPendentes;
    // // }
   

  
    // // UTILIZANDO LOCAL STORAGE
    //   // this.pedidoService.setLocalItem(this.itemPedido, 'itempedido');
    //   // console.log('itempedido: ', JSON.parse(localStorage.getItem('itempedido')));
    //   // localStorage.clear();
    //   // localStorage.removeItem('chave');

    //   // for(var i = 0; i < localStorage.length; i++) {
    //   //   console.log('chave: ', localStorage.key(i), 'conteudo: ', localStorage.getItem(localStorage.key(i)));
    //   //   console.log('chave session: ', sessionStorage.key(i), 'conteudo: ', sessionStorage.getItem(sessionStorage.key(i)));
    //   // }
}
