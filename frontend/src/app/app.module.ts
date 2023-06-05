import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { Dashboard1Component } from './dashboard1/dashboard1.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


//

import { AdminLayoutRoutes } from 'app/layouts/admin-layout/admin-layout.routing';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from 'app/icons/icons.component';
import { MapsComponent } from 'app/maps/maps.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { UpgradeComponent } from 'app/upgrade/upgrade.component';

import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';

import {MatSelectModule} from '@angular/material/select';
import { Dashboard1Component } from 'app/dashboard1/dashboard1.component';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { ListeCongieComponent } from './liste-congie/liste-congie.component';
import { CalculPrixHrComponent } from './calcul-prix-hr/calcul-prix-hr.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { AddCongieComponent } from './add-congie/add-congie.component';
import { DonnerNbrHComponent } from './donner-nbr-h/donner-nbr-h.component';
import { ListeMesCongieComponent } from './liste-mes-congie/liste-mes-congie.component';
import { PopupCongieComponent } from './popup-congie/popup-congie.component';
import { AddDemenagmentComponent } from './add-demenagment/add-demenagment.component';
import { ListePermutationComponent } from './liste-permutation/liste-permutation.component';
import { PopupPermutationComponent } from './popup-permutation/popup-permutation.component';
import { AutreDemandeComponent } from './autre-demande/autre-demande.component';
import { ReprisCongieComponent } from './repris-congie/repris-congie.component';
import { MesRepriseComponent } from './mes-reprise/mes-reprise.component';
import { PopupInsritFormationComponent } from './popup-insrit-formation/popup-insrit-formation.component';
import { AcceptCongieComponent } from './accept-congie/accept-congie.component';
import { PopupAccptCongieComponent } from './popup-accpt-congie/popup-accpt-congie.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSlideToggleModule,
    RouterModule.forChild(AdminLayoutRoutes),

    MatButtonModule,
    MatRippleModule,
    NgxPaginationModule,
    MatInputModule,
    MatSelectModule,
    ComponentsModule,
    MatDialogModule
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    //Dashboard1Component,
    //DashboardComponent,
    Dashboard1Component,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    
    NotificationsComponent,
    UpgradeComponent,
    AdminLayoutComponent,
    ListeEnseignantComponent,
    AddEnseignantComponent,
    ListeFormationComponent,
    ListeCongieComponent,
    CalculPrixHrComponent,
    AddFormationComponent,
    AddCongieComponent,
    DonnerNbrHComponent,
    ListeMesCongieComponent,
    PopupCongieComponent,
    AddDemenagmentComponent,
    ListePermutationComponent,
    PopupPermutationComponent,
    AutreDemandeComponent,
    ReprisCongieComponent,
    MesRepriseComponent,
    PopupInsritFormationComponent,
    AcceptCongieComponent,
    PopupAccptCongieComponent    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
