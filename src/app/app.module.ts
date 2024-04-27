import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import {CafesModule} from "./cafes/cafes.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CafesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
