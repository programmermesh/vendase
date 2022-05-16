import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ApiService } from "app/services/api.service";
import { NotificationService } from "app/services/notification.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isLoggedIn = false;
  result$: Observable<any[]>;
  errorMsg: string;

  constructor(
    private loginservice: ApiService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  /* ----------==========     Login User    ==========---------- */
  registerUser() {
    let model = {
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
    };
    console.log(model)
    if (this.registerForm.invalid) {
      return this.notificationService.error("Kindly fill all fields");
    }
    this.loginservice.registerUser(model).subscribe((data: any) => {
      if (data.token) {
        this.registerForm.reset();
        return this.notificationService.success("Registration succesful");
      }
    },
      ((err:any) =>{
        this.registerForm.reset();
        return this.notificationService.error(err.error.error);
      })
    )
    
  }

 

   /* ----------==========     login User    ==========---------- */
   login(){
    this.router.navigate(["login"]);
  }
}
