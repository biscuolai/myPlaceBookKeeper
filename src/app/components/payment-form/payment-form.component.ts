import { Payment } from './../../models/payment.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidators } from 'src/app/utils/FormValidators';

// Datepicker libraries
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { AppDateAdapter, APP_DATE_FORMATS} from './../../utils/date.adapter';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class PaymentFormComponent implements OnInit {

  // Reactive form variable
  form: FormGroup;

  // Subscription variables
  paramSubscription: Subscription;
  paymentSubscription: Subscription;

  // module
  payment: Payment;

  // parameter from the url - id configured in routing
  paramId: string;

  message: string;

  constructor(
    private paymentService: PaymentService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      date: [null, [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      amount: [0, null],
      price: [0, [Validators.required]],
      provider: ['', [Validators.required]],
      supportBudget: ['', [Validators.required]],
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
          this.paymentSubscription = this.paymentService.getPayments()
            .subscribe(
              (response: any) => {

                console.log('data', response);

                let paymentList: Payment[];

                paymentList = response.map(document => {
                  return {
                    id: document.payload.doc.id,
                    ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
                  } as Payment;
                })

                // Sorting the payment-list in ascending order.
                this.payment = paymentList.find((document) => (document as Payment).id == this.paramId);

                if (this.payment === undefined) {
                  this.router.navigate(['/record-not-found']);
                }

                delete this.payment.id;
                this.form.setValue(this.payment);

              }
            );
        }
      }
    );
  }

  addPayment() {
    this.resetForm();
    this.router.navigate(['/payment']);
  }

  private resetForm() {
    this.form.reset();

    this.form.patchValue({
      date: new Date(),
      description: '',
      amount: 0,
      price: 0,
      provider: 'providers/UXoIkl9z4mkmihCGt1BD',
      supportBudget: 'supportBudget/3XtFDq4oJdNxRgHISYbO'
    });
  }

  onSubmit() {

    console.log('form', this.form);

    if (this.form.valid) {
      console.log('form is valid');

    // Reset the message value.
    this.message = '';

    // Making the copy of the form and assigning it to the paymentData.
    let paymentData = Object.assign({}, this.form.value);

    console.log(this.form.value);

    // Does the insert operation.
    if (this.paramId == null) {
      this.paymentService.createPayment(paymentData);
      this.message = paymentData.fullName + ' information is successfully saved!';
    } else {
      // Does the update operation for the selected payment.
      // The 'paymentData' object has the updated details of the payment.
      this.paymentService.updatePayment(paymentData, this.paramId);
      this.message = 'Payment successfully updated!';
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
    if (this.paymentSubscription != null) {
      this.paymentSubscription.unsubscribe();
    }
  }

}
