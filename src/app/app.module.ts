import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { ExamplesModule } from "./examples/examples.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

// 1. Import the libs you need
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HomeModule } from "./home/home.module";
import { ReadonlyTextComponent } from "./shared/readonly-text/readonly-text.component";
import { FooterComponent } from "./shared/footer/footer.component";

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyCM287uVaN-kx1_NcnDo0DCCHfUwLLYv0g",
  authDomain: "findbadtenantswinnipeg.firebaseapp.com",
  databaseURL: "https://findbadtenantswinnipeg.firebaseio.com",
  projectId: "findbadtenantswinnipeg",
  storageBucket: "findbadtenantswinnipeg.appspot.com",
  messagingSenderId: "862044947195",
  appId: "1:862044947195:web:120cd420540b6f8b1f665e",
  measurementId: "G-81JNCHSG1C",
};

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    HomeModule,

    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
