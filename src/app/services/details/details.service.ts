import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Details } from './details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private firestore: AngularFirestore) { }

  getDetails() {
    return this.firestore.collection('details').snapshotChanges();
  }
  createDetails(detail: Details){
    return this.firestore.collection('details').add(detail);
  }
  updateDetails(detail: Details){
    delete detail.id;
    this.firestore.doc('details/' + detail.id).update(detail);
}
  deleteDetails(detailId: string){
  this.firestore.doc('details/' + detailId).delete();
}

}
