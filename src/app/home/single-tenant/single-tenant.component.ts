import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-single-tenant",
  templateUrl: "./single-tenant.component.html",
  styleUrls: ["./single-tenant.component.css"],
})
export class SingleTenantComponent implements OnInit {
  @Input() tenant: any;

  constructor() {}

  ngOnInit(): void {}
}
