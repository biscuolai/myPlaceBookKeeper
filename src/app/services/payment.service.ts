import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private firestore: AngularFirestore) { }

  getPayments() {
    return this.firestore.collection('payments').snapshotChanges();
  }

  createPayment(payment: Payment){
    return this.firestore.collection('payments').add(payment);
  }

  updatePayment(payment: Payment, id: string){
    delete payment.id;
    this.firestore.doc('payments/' + id).update(payment);
  }

  deletePayment(paymentId: string){
    this.firestore.doc('payments/' + paymentId).delete();
  }
}
