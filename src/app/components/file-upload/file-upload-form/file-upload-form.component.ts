import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadFileService } from '../services/file-upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList = null;
  progress: { percentage: number } = { percentage: 0 };
  showProgressBar: boolean = false;
  form: FormGroup;
  @ViewChild('labelImport')
  labelImport: ElementRef;
  subscription: Subscription;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.form = new FormGroup({
      importFile: new FormControl('', Validators.required)
   });

   this.subscription = this.uploadService.showProgressBar.subscribe((show) => {
      this.showProgressBar = show;
   });
  }

  upload() {
    // multiple files upload
    Array.from(this.selectedFiles).map(file => {
      this.uploadService.pushFileToStorage(file, this.progress);
    });

    this.selectedFiles = undefined;
    this.labelImport.nativeElement.innerText = '';
  }
  
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');

    this.selectedFiles = files;
  }
}
