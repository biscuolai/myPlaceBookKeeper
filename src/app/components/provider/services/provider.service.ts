import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Provider } from '../models/provider.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

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
    this.router.navigate(['/provider']);
  }
}
