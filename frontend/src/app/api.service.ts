import { Injectable, Output, EventEmitter } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //key: 'JWT';
  redirectUrl: string;
  apiUrl: string = "";
  cin: any;
  
  @Output() getLoggedInName: EventEmitter<boolean> = new EventEmitter<boolean>();
  congieData: any;

  constructor(private httpClient: HttpClient) { }

  //login users 
  userlogin(email, pwd) {
    return this.httpClient.post<any>('http://localhost/backend/login.php', { email, pwd })
      .pipe(map(Users => {
        if (Users && Users.length > 0) {
          const user = Users[0];
          this.setToken('token', user.name);
          this.saveId(user.id);
          this.saveName(user.name);
          this.saveRole(user.role);
          this.saveEmail(user.email);
          
          this.getLoggedInName.emit(true);
          return Users;
        } else {
          throw new Error('User data is empty.');
        }
      }),
        catchError(error => {
          console.error('Error during user login:', error);
          throw error; // Rethrow the error to be handled by the caller
        }))
  }

  saveId(id: string) {
    localStorage.setItem('Id', id);
  }
  getId() {
    return localStorage.getItem('Id');
  }

  saveEmail(email: string) {
    localStorage.setItem('email', email);
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  saveName(name: string) {
    localStorage.setItem('Name', name);
  }

  getName() {
    return localStorage.getItem('Name');
  }

  saveRole(role: string) {
    localStorage.setItem('Role', role);
  }

  getRole() {
    return localStorage.getItem('Role');
  }

  




  clearSavedData() {
    localStorage.removeItem('Name');
    localStorage.removeItem('Role');
    localStorage.removeItem('email');
    localStorage.removeItem('Id');
    
  }

  //Add user
  userregistration(form: any) {
    return this.httpClient.post("http://localhost/backend/registre.php", form);
  }

  getUserById(userId: any) {
    return this.httpClient.get<any>("http://localhost/backend/getUser.php?id=" + userId);
  }


  updateUserProfile(f: any) {
    return this.httpClient.post<any>("http://localhost/backend/modifier_profile.php", f);
  }


  getCongieByUserId(userId: number){
    return this.httpClient.get<any[]>("http://localhost/backend/liste_mes_congie.php?id=" + userId);
  }

  getpermutationByUserId(userId: number){
    return this.httpClient.get<any[]>("http://localhost/backend/liste_mes_etablissment!.php?id=" + userId);
  }

  //updateCongie
  updateCongieById(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(`http://localhost/backend/modifierCongie.php?id=${id}`, data);
  }

  //updatePermutation
  updatePermutationById(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(`http://localhost/backend/modifierPermutatuin.php?id=${id}`, data);
  }

  //getone poste
  getDataById(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost/backend/getOnecongie.php?id=${id}`);
  }

  //getone poste
 

  getetablissmentById(id_en: any) {
    return this.httpClient.get<any>(
      "http://localhost/backend/liste_mes_etablissment1!.php?id_en=" + id_en
    );
  }


  
  

  //Liste des enseignantes
  listeenseignant() {
    return this.httpClient.get<any>("http://localhost/backend/liste_enseignant.php");
  }

  //Liste des formations
  listeformations() {
    return this.httpClient.get<any>("http://localhost/backend/liste_formation.php");
  }

  getFormations(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost/backend/get_formation.php");
  }

  //add formation 
  addformation(form: any) {
    return this.httpClient.post("http://localhost/backend/ajout_formation.php", form);
  }

  getformationById(id_en: any) {
    return this.httpClient.get<any>(
      "http://localhost/backend/get_one_formation.php?id=" + id_en
    );
  }

  //add congie
  demandeCongie(form: any) {
    return this.httpClient.post("http://localhost/backend/dem_congie.php", form);
  }

  //add nombre des heures 
  addNbrHeure(form: any) {
    return this.httpClient.post("http://localhost/backend/calcul_prixheure.php", form);
  }


  //add demande etablissement
  addEtablissement(form: any) {
    return this.httpClient.post("http://localhost/backend/dem_etablissement.php", form);
  }

  //add autre demande 
  addAutreDemande(form: any) {
    return this.httpClient.post("http://localhost/backend/autre_demande.php", form);
  }

  //inscrit formation
  inscritFormation(form: any) {
    return this.httpClient.post("http://localhost/backend/inscrit_formation.php", form);
  }

  //repris congie 
  addReprisCongie(form: any) {
    return this.httpClient.post("http://localhost/backend/reprise_congie.php", form);
  }

  //Liste des congier
  listecongies() {
    return this.httpClient.get<any>("http://localhost/backend/liste_congie.php");
  }

  //get reprise by id
  getrepriseById(id_en: any) {
    return this.httpClient.get<any>(
      "http://localhost/backend/liste_mes_repris.php?id=" + id_en);
  }

  //accepter congie
  accpterCongie(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(`http://localhost/backend/accepter_congie.php?id=${id}`, data);
  }

  //refuse congie
  refuseCongie(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(`http://localhost/backend/refuse_congie.php?id=${id}`, data);
  }




  setToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

  deleteToken(key: string) {
    localStorage.removeItem(key);
  }

  isLoggedIn() {
    return this.getToken('token') != null;
  }

  // getAllTokens() {
  //   const tokens = {};
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     const token = localStorage.getItem(key);
  //     tokens[key] = token;
  //   }
  //   return tokens;
  // }

}
