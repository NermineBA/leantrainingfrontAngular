import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { QualityComponent } from './quality/quality.component';
import { EnvironmentComponent } from './environment/environment.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { InnovationComponent } from './innovation/innovation.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { AddformationComponent } from './addformation/addformation.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {MatCardModule } from '@angular/material/card';
//import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    ManufacturingComponent,
    QualityComponent,
    EnvironmentComponent,
    SupplyChainComponent,
    LeadershipComponent,
    InnovationComponent,
    CreateAccountComponent,
    LoginComponent,
    DetailsComponent,
    ProfileComponent,
    EditprofilComponent,
    MycoursesComponent,
    AddformationComponent,
    ChangepasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
