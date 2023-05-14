import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {
    loginForm!: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required])
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) return;
        this.userService
            .login({
                email: this.loginForm.get('email')?.value,
                password: this.loginForm.get('password')?.value
            })
            .subscribe(() => {
                this.router.navigate(['/home']);
            });
    }
}
