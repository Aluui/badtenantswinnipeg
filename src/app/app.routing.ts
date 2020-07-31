import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { LandingComponent } from "./examples/landing/landing.component";
import { LoginComponent } from "./examples/login/login.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { HomepageComponent } from "./home/homepage/homepage.component";
import { AddTenantsComponent } from "./home/add-tenants/add-tenants.component";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: HomepageComponent },
  { path: "add-tenant", component: AddTenantsComponent },
  { path: "sample", component: ComponentsComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "examples/landing", component: LandingComponent },
  { path: "examples/login", component: LoginComponent },
  { path: "examples/profile", component: ProfileComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
