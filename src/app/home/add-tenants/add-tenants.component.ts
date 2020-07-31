import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-add-tenants",
  templateUrl: "./add-tenants.component.html",
  styleUrls: ["./add-tenants.component.css"],
})
export class AddTenantsComponent implements OnInit {
  tenantlist: string;
  done = false;

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {}

  addTenants() {
    if (!this.tenantlist) {
      return;
    }

    const list = this.tenantlist;

    const tenants = list.split("\n");

    tenants.forEach((name) => {
      const trimmedName = name.trim();
      // console.log("names", name);

      this.db.collection("tenants").add({
        name: trimmedName,
      });
    });

    this.done = true;
  }
}
