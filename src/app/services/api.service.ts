import { Injectable } from "@angular/core";
import { AppSettings } from "../app.config";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private _http: HttpClient,) {}

  /* ----------==========     Create User API    ==========---------- */
  registerUser(model: any): Observable<any> {
    return this._http.post(AppSettings.API_ENDPOINT + 'register', model)// catch error
  }


  /* ----------==========     Login API    ==========---------- */
  loginUser(model: any) {
    return this._http.post(AppSettings.API_ENDPOINT + 'login', model)
  }

  clearLoggedInUser() {
    sessionStorage.removeItem("currentUser");
  }
  
}
