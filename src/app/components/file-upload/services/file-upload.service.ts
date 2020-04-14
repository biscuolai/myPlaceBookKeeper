import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { FileUpload } from './../models/file-upload.model';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore  } from '@angular/fire/firestore';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private basePath = '/uploads';
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  downloadURL: string;
  snapshot: UploadTaskSnapshot;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) { }

  pushFileToStorage(file: File, progress: { percentage: number }) {

    // The storage path
    const fullPath = `${this.basePath}/${file.name}`;

    // Reference to the storage bucket
    const refStorageBucket = this.storage.ref(fullPath);
    this.task = refStorageBucket.put(file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.task.then(snapshot => {
      this.snapshot = snapshot; // To know when it is done
      console.log('snapshot task done', this.snapshot);

      const fileUpload = new FileUpload();
      fileUpload.fullPath = this.snapshot.metadata.fullPath;
      fileUpload.uploadedDate = new Date();
      fileUpload.name = this.snapshot.metadata.name;
      fileUpload.contentType = this.snapshot.metadata.contentType;
      fileUpload.totalBytes = this.snapshot.totalBytes;
      console.log('fileupload class before add collection', fileUpload);

      this.saveRecord(file, fileUpload);

    }).catch(snapshot => {
      this.snapshot = this.task.task.snapshot; // To know whenever there is an error/cancel from user
      console.log('snapshot error', this.snapshot);
    });

    this.task.snapshotChanges().subscribe(
      (response: any) => {
        console.log('data in progress', response);
        progress.percentage = Math.round((response.bytesTransferred / response.totalBytes) * 100);
    });
  }

  saveRecord(file: File, fileUpload: FileUpload) {
    // The storage path
    let fullPath = `${this.basePath}/${file.name}`;

    // Reference to the storage bucket
    console.log('inside save revord', this.storage);
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
