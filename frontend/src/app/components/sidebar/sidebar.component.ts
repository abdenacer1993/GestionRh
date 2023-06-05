import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/registre', title: 'Add utilisateur', icon: 'person_add', class: '' },
  { path: '/liste-enseignant', title: 'Liste utilisateur', icon: 'content_paste', class: '' },
  { path: '/liste-formation', title: 'Liste formation', icon: 'content_paste', class: '' },
  { path: '/liste-congie', title: 'Liste congie', icon: 'content_paste', class: '' },
  { path: '/ajout-formation', title: 'Ajouter formation', icon: 'feed', class: '' },
  // { path: '/calcul-prixHr', title: 'Calcul prix des heures', icon: 'functions', class: '' },

];

//ensiegnant
export const ROUTES_enseignant: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/demande-congie', title: 'Demander congie', icon: 'ios_share', class: '' },
  { path: '/reprise-congie', title: 'Demander congie', icon: 'ios_share', class: '' },
  { path: '/demande-etablissement', title: 'Demander etablissement', icon: 'ios_share', class: '' },
  { path: '/autre-demande', title: 'Autre demande', icon: 'ios_share', class: '' },
  { path: '/donner-nbrH', title: 'Donner nombre des heures', icon: 'av_timer', class: '' },

];

//
export const ROUTES_admin: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard ADMIN', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/liste-enseignant', title: 'Liste utilisateur', icon: 'content_paste', class: '' },
  { path: '/liste-formation', title: 'Liste formation', icon: 'content_paste', class: '' },
  { path: '/liste-congie', title: 'Liste congie', icon: 'content_paste', class: '' }
];





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems_rh: any[];
  menuItems_admin: any[];
  isLogged: any;
  userRole: any;
  menuItems_enseignant: any[];
  constructor(private ap: ApiService) {
    this.userRole = this.ap.getRole();
    this.isLogged = this.ap.isLoggedIn();
  }

  ngOnInit() {
    this.menuItems_rh = ROUTES.filter(menuItem_rh => menuItem_rh);
    this.menuItems_admin = ROUTES_admin.filter(menuItem_admin => menuItem_admin);
    this.menuItems_enseignant = ROUTES_enseignant.filter(menuItem_enseignant => menuItem_enseignant);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
