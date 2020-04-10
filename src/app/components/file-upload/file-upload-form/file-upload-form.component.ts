import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../services/file-upload.service';

@Component({
  selector: 'file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  file: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.uploadService.pushFileToStorage(this.file, this.progress);
  }
}
