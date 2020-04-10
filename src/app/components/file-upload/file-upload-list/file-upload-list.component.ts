import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../services/file-upload.service';
import { FileUpload } from '../models/file-upload.model';

@Component({
  selector: 'file-upload-list',
  templateUrl: './file-upload-list.component.html',
  styleUrls: ['./file-upload-list.component.css']
})
export class ListUploadComponent implements OnInit {

  fileUploads: FileUpload[];

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {

    this.uploadService.getFileUploads().subscribe(
      (response: any) => {
        console.log('list upload data', response);

        this.fileUploads = response.map(document => {
          return {
            id: document.payload.doc.id,
            ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
          } as FileUpload;
        })
      }
    );
  }

  deleteFile(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}
