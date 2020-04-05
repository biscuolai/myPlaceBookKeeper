import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
 
export class StudentService {
 
  constructor(private fireStore: AngularFirestore) { }
 
  // Student form data.
  formData: Student;
 
  // Fetch all students information.
  getAllStudents() {
    // valueChanges() function returns the observable containing the student details expect the id of the document.
    // snapshotChanges() function returns the observable containing the student details and the id of the document (i.e. the metadata).
    return this.fireStore.collection('students').snapshotChanges();
  }
 
  createStudent(student: Student){
    return this.fireStore.collection('students').add(student);
  }

  updateStudent(student: Student, id: string){
    delete student.id;
    this.fireStore.doc('students/' + id).update(student);
  }

  deleteStudent(studentId: string){
    this.fireStore.doc('students/' + studentId).delete();
  }
}