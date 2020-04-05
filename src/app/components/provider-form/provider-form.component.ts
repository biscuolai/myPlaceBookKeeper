import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Provider } from '../../models/provider.model';
import { ProviderService } from '../../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidators } from '../../utils/FormValidators';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit {

  // Reactive form variable
  form: FormGroup;

  // Subscription variables
  paramSubscription: Subscription;
  providerSubscription: Subscription;

  // module 
  provider: Provider;

  // parameter from the url - id configured in routing
  paramId: string;

  message: string;

  constructor(
    private providerService: ProviderService, 
    //private fireStore: AngularFirestore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      abn: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
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
          this.providerSubscription = this.providerService.getProviders()
            .subscribe(
              (response: any) => {

                console.log('data', response);

                let providerList: Provider[];
    
                providerList = response.map(document => {
                  return {
                    id: document.payload.doc.id,
                    ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
                  } as Provider;
                })
    
                // Sorting the provider-list in ascending order.
                this.provider = providerList.find((document) => (document as Provider).id == this.paramId);
                
                if (this.provider === undefined) {
                  this.router.navigate(['/record-not-found']);
                }
                
                delete this.provider.id;
                this.form.setValue(this.provider);

              }
            );
        }
      }
    );

  }

  addProvider() {
    this.resetForm();
    this.router.navigate(['/provider']);
  }

  private resetForm() {
    this.form.reset();
    this.form.patchValue({
      abn: '',
      name: ''
    });

  }

  onSubmit() {

    console.log('form', this.form);

    if (this.form.valid) {
      console.log('form is valid');

    // Reset the message value.
    this.message = '';
 
    // Making the copy of the form and assigning it to the providerData.
    let providerData = Object.assign({}, this.form.value);
 
    console.log(this.form.value);

    // Does the insert operation.
    if (this.paramId == null) {
      this.providerService.createProvider(providerData);
      this.message = providerData.fullName + ' information is successfully saved!';
    } else {
      // Does the update operation for the selected provider.
      // The 'providerData' object has the updated details of the provider.
      this.providerService.updateProvider(providerData, this.paramId);
      this.message = 'Provider successfully updated!';
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
    if (this.providerSubscription != null) {
      this.providerSubscription.unsubscribe();
    }
  }

}
