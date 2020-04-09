import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
//import * as firebase from 'firebase/app';
//import 'firebase/storage';

import { FileUpload } from './upload-file.model';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore  } from '@angular/fire/firestore';
import { tap, finalize } from 'rxjs/operators';
//import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private basePath = '/uploads';
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) { }

  pushFileToStorage(file: File, progress: { percentage: number }) {

    // The storage path
    const fullPath = `${this.basePath}/${file.name}`;
    //console.log('path', fullPath);

    // Reference to the storage bucket
    //console.log('storage', this.storage);
    const refStorageBucket = this.storage.ref(fullPath);
    //console.log('storageRef', refStorageBucket);

    this.task = refStorageBucket.put(file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.task.snapshotChanges().subscribe(
      (response: any) => {
        console.log('data', response);

        progress.percentage = Math.round((response.bytesTransferred / response.totalBytes) * 100);

        if (response.metadata !== null && progress.percentage == 100 && !this.isActive(response.metadata))
        {
          console.log('metadata', response.metadata);
          //console.log('File available at', response.metadata.fullPath);

          const fileUpload = new FileUpload();
          fileUpload.fullPath = response.metadata.fullPath;
          fileUpload.uploadedDate = new Date();
          fileUpload.name = response.metadata.name;
          fileUpload.contentType = response.metadata.contentType;
          fileUpload.totalBytes = response.totalBytes;
          console.log('fileupload class before add collection', fileUpload);

          this.saveRecord(file, fileUpload);
        }
    });
  }

  saveRecord(file: File, fileUpload: FileUpload) {
    // The storage path
    let fullPath = `${this.basePath}/${file.name}`;
    //console.log('path', fullPath);

    // Reference to the storage bucket
    console.log('storage', this.storage);
    const refStorageBucket = this.storage.ref(fullPath);

    refStorageBucket.getDownloadURL().subscribe(
      (response: any) => {
        console.log('download url inside promise', response);
        fileUpload.downloadURL = response;
        console.log('fileupload with downloadURL', fileUpload);

        // Making the copy of the form and assigning it to the paymentData.
        let data = Object.assign({}, fileUpload);

        this.db.collection(`${this.basePath}`).add(data);
      });
  }

  isActive(snapshot){
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  getFileUploads() {
    return this.db.collection('uploads').snapshotChanges();
  }

  deleteFileUpload(fileUpload: FileUpload) {
    console.log('fileupload object in delete', fileUpload);

    this.db.doc('uploads/' + fileUpload.id).delete().then(() => {
      console.log('inside then - delete');
      this.storage.storage.refFromURL(fileUpload.downloadURL).delete();
    })
    .catch(error => console.log(error));
  }
}
