import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {NewPublicationComponent} from './new-publication/new-publication.component'
import {UserService} from './services/user.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './guards/auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';
import {AppDataService} from './services/app-data.service';
import { environment } from 'environments/environment';
import { NewBillboardComponent } from './billboard/new-billboard/new-billboard.component';
import { BillboardService } from './services/billboard.service';
import { BillboardComponent } from './billboard/billboard.component';
import { UpdateBillboardComponent } from './billboard/update-billboard/update-billboard.component';
import { PublicationsComponent } from './publications/publications.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BillboardSubscriptionComponent } from './billboard-subscription/billboard-subscription.component';

export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: environment.TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(environment.TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    NewBillboardComponent,
    NewPublicationComponent,
    BillboardComponent,
    UpdateBillboardComponent,
    PublicationsComponent,
    UserDetailsComponent,
    BillboardSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    AuthenticationService,
    UserService,
    AuthGuard,
    AdminAuthGuard,
    AppDataService,
    BillboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
