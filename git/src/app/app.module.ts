import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  { path: "", component: HomepageComponent},
  { path: "registration", component: RegistrationComponent }
];
@NgModule({
  declarations: [AppComponent, RegistrationComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
