import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { ToastyConfig } from 'ng2-toasty';
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
<<<<<<< HEAD
    private router: Router
    ) { }
=======
    private toastyConfig: ToastyConfig,
    private router: Router
    ) {
    this.toastyConfig.theme = 'bootstrap';
  }
>>>>>>> 3de6277fdba638b1ef7b137d43917aa5ce0a0017

  exibindoNavbar() {
    return this.router.url !== '/login';
  }
}
