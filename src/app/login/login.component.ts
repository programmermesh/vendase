import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ApiService } from "app/services/api.service";
import { NotificationService } from "app/services/notification.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLoggedIn = false;

  constructor(
    private loginservice: ApiService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ["test", [Validators.required]],
      password: ["cityslicka", Validators.required],
    });
  }

  /* ----------==========     Login User    ==========---------- */
  loginUser() {
    let model = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    if (this.loginForm.invalid) {
      return this.notificationService.error("Kindly fill all fields");
    }
    this.loginservice.loginUser(model).subscribe((data: any) => {
      if (data.token) {
        const token = data.token;
        if (token) {
          // store user details and jwt token in session storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify({ token: token }));
          this.notificationService.success("login succesfully");
          this.router.navigate(["dashboard"]);
          this.isLoggedIn = true;
        }
      } 
    },
    ((err:any) =>{
      this.loginForm.reset();
      return this.notificationService.error(err.error.error);
    }));
  }

   /* ----------==========     create Account    ==========---------- */
  register(){
    this.router.navigate(["register"]);
  }
}
