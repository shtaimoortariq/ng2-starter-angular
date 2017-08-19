import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MATERIAL DESIGN
import { MetrialDesignImports } from "./material.imports";
import 'hammerjs';

//COMPONENTS
import { AppComponent } from './app.component';
import { AuthComponents } from "./components/auth/user-registration-routes";

//PROVIDERS
import { AppProviders } from "./providers/provider.imports";

//ROUTING
import { AppRoutingModule } from "./app.routes";

//ANGULARFIRE2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MetrialDesignImports,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AppProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
