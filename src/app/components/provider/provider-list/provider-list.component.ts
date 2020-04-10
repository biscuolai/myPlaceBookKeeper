import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Provider } from '../models/provider.model';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  deleteMessage: string;
  providerList: Provider[];
  constructor(
    private service: ProviderService
  ) { }

  ngOnInit() {
    this.service.getProviders().subscribe(response => {
      this.providerList = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as Provider;
      })

      // Sorting the provider-list in ascending order.
      this.providerList = this.providerList.sort((obj1, obj2) => (obj1 as any).rollNo - (obj2 as any).rollNo);
    });
  }

  onDelete(provider: Provider) {
    console.log(provider);
    this.service.deleteProvider(provider.id);
    this.deleteMessage = provider.name + ' information is successfully deleted!';
  }
}
