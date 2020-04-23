import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public validateForm: FormGroup;
  constructor(
    public fb: FormBuilder, 
    public userService:UserService,
    public router:Router
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required,
        // Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4}$')
      ]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      username: [null, [Validators.required]],
    });
 
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      const user =this.validateForm.value;
      this.userService.register(user)
      .subscribe(
        (res:HttpResponse<object>) =>{
          // this.notification.create(
          //   'success',
          //   'Registro realizado con éxito',
          //   res['message']
          //   );
        }
      )
      this.validateForm.reset();
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

} 