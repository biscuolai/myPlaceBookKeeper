import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SupportBudgetService {

  constructor(private firestore: AngularFirestore) { }

  getAllSupportBudget() {
    return this.firestore.collection('supportBudget').snapshotChanges();
  }
}
