import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false, // nếu bạn dùng standalone components thì để là true
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // bạn dùng .css hoặc .scss tùy
})
export class AppComponent {
  title = 'CakeUp';

  isMenuOpen: boolean = false;
  activeTab: 'login' | 'register' = 'login';
  loginForm: FormGroup;
  registerForm: FormGroup;
  showModal = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  switchTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitLogin() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      // TODO: Call API
    }
  }

  submitRegister() {
    if (this.registerForm.valid) {
      console.log('Register Data:', this.registerForm.value);
      // TODO: Call API
    }
  }


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
