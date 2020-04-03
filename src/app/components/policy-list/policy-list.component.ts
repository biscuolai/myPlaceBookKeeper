import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../services/policy.service'
import { Policy } from '../../models/policy.model';

@Component({
  selector: 'policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id, 
          // policyNumber: e.payload.doc.data().policyNumber,
          // creationDate: e.payload.doc.data().creationDate,
          // effectiveDate: e.payload.doc.data().effectiveDate,
          // expireDate: e.payload.doc.data().expireDate,
          // paymentOption: e.payload.doc.data().paymentOption,
          // policyAmount: e.payload.doc.data().policyAmount,
          // extraInfo: e.payload.doc.data().extraInfo
          // ...e.payload.doc.data()
        } as Policy;
      })
    });
  }

  create(policy: Policy){
      this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }
}