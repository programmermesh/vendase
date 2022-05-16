import { RegisterComponent } from './../../register/register.component';
import { Routes } from "@angular/router";
import { LoginComponent } from "app/login/login.component";

import { DashboardComponent } from "../../dashboard/dashboard.component";

export const AdminLayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent },
];
