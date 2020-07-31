import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "./homepage/homepage.component";
import { SingleTenantComponent } from "./single-tenant/single-tenant.component";
import { ReadonlyTextComponent } from "app/shared/readonly-text/readonly-text.component";
import { FormsModule } from "@angular/forms";
import { AddTenantsComponent } from "./add-tenants/add-tenants.component";
import { FooterComponent } from "app/shared/footer/footer.component";

@NgModule({
  declarations: [
    HomepageComponent,
    SingleTenantComponent,
    ReadonlyTextComponent,
    AddTenantsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
