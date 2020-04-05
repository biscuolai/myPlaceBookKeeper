import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';
 
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  deleteMessage: string;
  studentList: Student[];
  constructor(public service: StudentService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
    this.service.getAllStudents().subscribe(response => {
      this.studentList = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as Student;
      })
 
      // Sorting the student-list in ascending order.
      this.studentList = this.studentList.sort((obj1, obj2) => (obj1 as any).rollNo - (obj2 as any).rollNo);
    });
  }
 
  onDelete(student: Student) {
    console.log(student);
    this.service.deleteStudent(student.id);
    this.deleteMessage = student.fullName + ' information is successfully deleted!';
  }
}