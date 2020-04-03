import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
 
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
  message: string;
  constructor(public service: StudentService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      fullName: '',
      branchName: '',
      rollNo: '',
      guardianPhoneNo: ''
    }
  }
 
  onSubmit(form: NgForm) {

    console.log("bgform", form);

    // Reset the message value.
    this.message = '';
 
    // Making the copy of the form and assigning it to the studentData.
    let studentData = Object.assign({}, form.value);
 
    // To avoid messing up the document id and just update the other details of the student. We will remove the 'property' from the student data.
    delete studentData.id;
 
    // Does the insert operation.
    if (form.value.id == null) {
      this.fireStore.collection('students').add(studentData);
      this.message = studentData.fullName + ' information is successfully saved!';
    } else {
      // Does the update operation for the selected student.
      // The 'studentData' object has the updated details of the student.
      this.fireStore.doc('students/' + form.value.id).update(studentData);
      this.message = 'Student successfully updated!';
    }
 
    // Reset the form if the operation is successful.
    this.resetForm(form);
  }
}