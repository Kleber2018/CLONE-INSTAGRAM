import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FaleConosco } from './fale-conosco.model';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FaleConoscoService {

  private faleConoscoCollection: AngularFirestoreCollection<FaleConosco>;

  constructor(protected db: AngularFirestore,
              protected where: AngularFirestore) {
      this.faleConoscoCollection = db.collection<FaleConosco>('faleconosco');
    }
    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

    // AVALIACAO
    // criando avaliacao
    addMensagemFaleConosco(mensagem: FaleConosco) {
      const timestamp = this.timestamp;
      return this.faleConoscoCollection.add({
        ...mensagem,
        createdAt: timestamp
      });
    }
}
