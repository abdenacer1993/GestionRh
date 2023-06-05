import { Routes } from '@angular/router';

//import { DashboardComponent } from../../dashboard2/dashboard.componentnt';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { Dashboard1Component } from 'app/dashboard1/dashboard1.component';
import { ListeEnseignantComponent } from 'app/liste-enseignant/liste-enseignant.component';
import { AddEnseignantComponent } from 'app/add-enseignant/add-enseignant.component';
import { RegisterComponent } from 'app/register/register.component';
import { ListeFormationComponent } from 'app/liste-formation/liste-formation.component';
import { ListeCongieComponent } from 'app/liste-congie/liste-congie.component';
import { CalculPrixHrComponent } from 'app/calcul-prix-hr/calcul-prix-hr.component';
import { AddFormationComponent } from 'app/add-formation/add-formation.component';
import { AddCongieComponent } from 'app/add-congie/add-congie.component';
import { DonnerNbrHComponent } from 'app/donner-nbr-h/donner-nbr-h.component';
import { ListeMesCongieComponent } from 'app/liste-mes-congie/liste-mes-congie.component';
import { AddDemenagmentComponent } from 'app/add-demenagment/add-demenagment.component';
import { ListePermutationComponent } from 'app/liste-permutation/liste-permutation.component';
import { AutreDemandeComponent } from 'app/autre-demande/autre-demande.component';
import { ReprisCongieComponent } from 'app/repris-congie/repris-congie.component';
import { MesRepriseComponent } from 'app/mes-reprise/mes-reprise.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard1',      component: Dashboard1Component },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'liste-enseignant', component: ListeEnseignantComponent },
    { path: 'add-enseignant', component: AddEnseignantComponent},
    { path: 'registre', component: RegisterComponent},
    { path: 'liste-formation', component: ListeFormationComponent},
    { path: 'liste-congie', component: ListeCongieComponent},
    { path: 'calcul-prixHr', component: CalculPrixHrComponent},
    { path: 'ajout-formation', component: AddFormationComponent},
    { path: 'demande-congie', component: AddCongieComponent},
    { path: 'donner-nbrH', component: DonnerNbrHComponent},
    { path: 'mes-congie' ,component: ListeMesCongieComponent},
    { path: 'demande-etablissement' ,component: AddDemenagmentComponent},
    { path: 'mes-permutation' ,component: ListePermutationComponent},
    { path: 'autre-demande' , component : AutreDemandeComponent},
    { path: 'reprise-congie' , component : ReprisCongieComponent},
    { path: 'mes-repris-congie' , component : MesRepriseComponent} 

];
