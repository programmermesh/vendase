import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "app/services/api.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NotificationService } from "app/services/notification.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {

  }

}