import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormValidators } from 'src/app/utils/FormValidators';
 
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
 
  // Reactive form variable
  form: FormGroup;

  // Subscription variables
  paramSubscription: Subscription;
  studentSubscription: Subscription;

  // module 
  student: Student;

  // parameter from the url - id configured in routing
  paramId: string;

  message: string;
  
  constructor(
    private studentService: StudentService, 
    //private fireStore: AngularFirestore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit() {
    
    //this.resetForm();
    
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      rollNo: ['', null],
      branchName: ['', null],
      guardianPhoneNo: ['', null],
    });

    this.paramSubscription = this.route.params.subscribe(
      (params: any) => {

        console.log('params', params);

        this.paramId = params['id'];

        console.log('this.id', this.paramId);

        // no param id has been passed, therefore it is not edit mode
        if (this.paramId === undefined) {
          this.resetForm();
        } else {
          this.studentSubscription = this.studentService.getAllStudents()
            .subscribe(
              (response: any) => {

                console.log('data', response);

                let studentList: Student[];
    
                studentList = response.map(document => {
                  return {
                    id: document.payload.doc.id,
                    ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
                  } as Student;
                })
    
                // Sorting the student-list in ascending order.
                this.student = studentList.find((document) => (document as Student).id == this.paramId);
                
                if (this.student === undefined) {
                  this.router.navigate(['/record-not-found']);
                }
                
                delete this.student.id;
                this.form.setValue(this.student);

              }
            );
        }
      }
    );
  }

  addStudent() {
    this.resetForm();
    this.router.navigate(['/student']);
  }

  private resetForm() {
    this.form.reset();

    // // set default Due Date to next month
    // const today = new Date();
    // today.setMonth(today.getMonth() + 1);
    // const dueDateYear = today.getFullYear();
    // const dueDateMonth = today.getMonth();
    // const dueDateDay = today.getDate();

    // today.setMonth(today.getMonth() - 1);
    // const todayYear = today.getFullYear();
    // const todayMonth = today.getMonth();
    // const todayDay = today.getDate();

    this.form.patchValue({
      fullName: '',
      rollNo: '',
      branchName: '',
      guardianPhoneNo: ''
    });

  }

  onSubmit() {

    console.log('form', this.form);

    if (this.form.valid) {
      console.log('form is valid');

    // Reset the message value.
    this.message = '';
 
    // Making the copy of the form and assigning it to the studentData.
    let studentData = Object.assign({}, this.form.value);
 
    console.log(this.form.value);
    console.log(this.studentService.formData);

    

    // To avoid messing up the document id and just update the other details of the student. We will remove the 'property' from the student data.
    // if (studentData.id != null){
    //   delete studentData.id;
    // }
 
    // Does the insert operation.
    if (this.paramId == null) {
      this.studentService.createStudent(studentData);
      this.message = studentData.fullName + ' information is successfully saved!';
    } else {
      // Does the update operation for the selected student.
      // The 'studentData' object has the updated details of the student.
      this.studentService.updateStudent(studentData, this.paramId);
      this.message = 'Student successfully updated!';
    }
 
    // Reset the form if the operation is successful.
    this.resetForm();

    } else {
      FormValidators.checkFormValidators(this.form);
    }
  }

  // implements from iform-candeactivate
  canExitPage() {
    return FormValidators.canExitPage(this.form);
  }

  checkValidTouched(fieldName) {
    FormValidators.checkValidTouched(this.form, fieldName);
  }
 
  ngOnDestroy() {
    if (this.paramSubscription != null) {
      this.paramSubscription.unsubscribe();
    }
    if (this.studentSubscription != null) {
      this.studentSubscription.unsubscribe();
    }
  }
}