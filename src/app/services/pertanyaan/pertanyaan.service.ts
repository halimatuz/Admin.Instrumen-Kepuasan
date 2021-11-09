import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pertanyaan } from './pertanyaan.model';
@Injectable({
  providedIn: 'root'
})
export class PertanyaanService {

  constructor(private firestore: AngularFirestore) { }

  getPertanyaan() {
    return this.firestore.collection('pertanyaan').snapshotChanges();
  }
  createPertanyaan(pertanyaan: Pertanyaan){
    return this.firestore.collection('pertanyaan').add(pertanyaan);
  }
  updatePertanyaan(pertanyaan: Pertanyaan){
    delete pertanyaan.id;
    this.firestore.doc('pertanyaan/' + pertanyaan.id).update(pertanyaan);
}
deletePertanyaan(pertanyaanId: string){
  this.firestore.doc('policies/' + pertanyaanId).delete();
}

}
