import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'jwt';

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken() {
    localStorage.removeItem(this.tokenKey);
  }

  isTokenExpired() {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;
    return (Math.floor(Date.now() / 1000)) >= expiry;
}
}
