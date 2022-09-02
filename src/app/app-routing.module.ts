import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddformationComponent } from './addformation/addformation.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactComponent } from './contact/contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DetailsComponent } from './details/details.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { EnvironmentComponent } from './environment/environment.component';
import { HomeComponent } from './home/home.component';
import { InnovationComponent } from './innovation/innovation.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { LoginComponent } from './login/login.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { ProfileComponent } from './profile/profile.component';
import { QualityComponent } from './quality/quality.component';

import { SupplyChainComponent } from './supply-chain/supply-chain.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"mycourses",component:MycoursesComponent},
  {path:"change-pwd",component:ChangepasswordComponent},
  {path:"addformation",component:AddformationComponent},
  {path:"edit",component:EditprofilComponent },
  {path:"details",component:DetailsComponent},
  {path:"contact",component:ContactComponent},
  {path:"about-us",component:AboutusComponent},
  {path:"create-account",component:CreateAccountComponent},
  {path:"login",component:LoginComponent},
  {path:"manufacturing",component:ManufacturingComponent},
  {path:"quality",component:QualityComponent},
  {path:"environments",component:EnvironmentComponent},
  {path:"supply-chain",component:SupplyChainComponent},
  {path:"leadership",component:LeadershipComponent},
  {path:"innovation",component:InnovationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
