// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userRole: string | null = null;
  user: any;

  constructor() {}

  // Simulate a login method
  login(role: string): void {
    this.isAuthenticated = true;
    this.userRole = role;
    localStorage.setItem('userRole', role); // Store user role in local storage
  }

  // Simulate a logout method
  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
    localStorage.removeItem('userRole'); // Remove user role from local storage
  }

  // Check if user is authenticated
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Example using token for login status
  }

  // Get the user role
  getUserRole(): string | null {
    if (this.userRole) {
      return this.userRole; // Retrieve from memory if available
    }
    return localStorage.getItem('userRole'); // Fallback to localStorage
  }

  getLoggedInUser(): string | null {
    return localStorage.getItem('userName'); // Adjust as per your implementation
  }
  


  // Simulate user role checking (for example purposes)
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }
}
