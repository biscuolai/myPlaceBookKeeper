import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showMainNavigation: boolean = false;
  subscription: Subscription;

  constructor(private authService: AuthService)
  {

  }

  ngOnInit(){
    this.subscription = this.authService.showMainNavigation.subscribe(
      (show) => {
        console.log('subscription show',show, show == 'false');
        this.showMainNavigation = (show == 'true')
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
