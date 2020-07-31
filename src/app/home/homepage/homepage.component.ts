import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import * as Rellax from "rellax";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators/map";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit, OnChanges {
  focus;
  focus1;

  tenants: any[];
  filteredTenants: any[];

  sub$: Subscription;

  firstname = "";

  constructor(private db: AngularFirestore) {}

  filterTenants() {
    const firstname = this.firstname;

    if (!firstname) {
      this.filteredTenants = this.tenants;
    }

    this.filteredTenants = this.tenants.filter((v) =>
      v.name.toLowerCase().includes(firstname.toLowerCase())
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    this.sub$ = this.db
      .collection<any>("tenants")
      .valueChanges()
      .subscribe((val) => {
        this.tenants = val;
        this.filteredTenants = val;
      });

    var rellaxHeader = new Rellax(".rellax-header");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");

    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }
}
