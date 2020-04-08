import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Provider } from './../model/provider.model';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  constructor(private firestore: AngularFirestore) { }

  getProviders() {
    return this.firestore.collection('providers').snapshotChanges();
  }

  createProvider(provider: Provider){
    return this.firestore.collection('providers').add(provider);
  }

  updateProvider(provider: Provider, id: string){
    delete provider.id;
    this.firestore.doc('providers/' + id).update(provider);
  }

  deleteProvider(providerId: string){
    this.firestore.doc('providers/' + providerId).delete();
  }
}
