import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false, // nếu bạn dùng standalone components thì để là true
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // bạn dùng .css hoặc .scss tùy
})
export class AppComponent {
  title = 'CakeUp';

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
