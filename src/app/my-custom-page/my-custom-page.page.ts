import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'my-custom-page.page.html',
  styleUrls: ['my-custom-page.page.scss'],
})
export class MyCustomPage {
  constructor(private router: Router) {}

  // Funtion for the Go by event butto
  goByEvent() {
    this.router.navigate(['my-custom-page-with-id/1']); // Go to the specified path when clicked
  }
}
