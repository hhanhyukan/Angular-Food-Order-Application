import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PasswordsMatchValidator } from '../../shared/validators/password_match_validator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    registerForm!: FormGroup;
    submitted = false;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.registerForm = this.fb.group(
            {
                name: this.fb.control('', [Validators.required]),
                email: this.fb.control('', [Validators.required, Validators.email]),
                password: this.fb.control('', [Validators.required]),
                confirmPassword: this.fb.control('', [Validators.required]),
                address: this.fb.control('', [Validators.required])
            },
            {
                validator: PasswordsMatchValidator('password', 'confirmPassword')
            }
        );
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) return;
        this.userService
            .register({
                name: this.registerForm.get('name')?.value,
                email: this.registerForm.get('email')?.value,
                password: this.registerForm.get('password')?.value,
                confirmPassword: this.registerForm.get('confirmPassword')?.value,
                address: this.registerForm.get('address')?.value
            })
            .subscribe(() => {
                this.router.navigate(['/login']);
            });
    }
}
