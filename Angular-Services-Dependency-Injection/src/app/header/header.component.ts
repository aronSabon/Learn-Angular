import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  selectedTab: string = 'admin';
  HomeClicked() {
    this.selectedTab = 'home';
  }
  AdminClicked() {
    this.selectedTab = 'admin';
  }
  constructor(private subService:SubscribeService){

  }
  OnSubscribe() {
    this.subService.OnSubscribeClicked('yearlyyyyyyyyy');
  }

}
