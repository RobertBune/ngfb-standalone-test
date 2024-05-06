import { Injectable, computed, inject, signal } from '@angular/core';
import { Auth, User, signInAnonymously } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);

  private currentUserSignal = signal<User | null>(null);
  readonly currentUser = computed(() => this.currentUserSignal() !== null ? 'Anonymous' : null);
  readonly isLoggedIn = computed(() => this.currentUserSignal() !== null)

  constructor() {
    setTimeout(() => {
      if (this.auth.currentUser !== null) {
        this.currentUserSignal.set(this.auth.currentUser);
      }
    }, 1000);
  }

  public loginAnon(): Promise<boolean> {
    return signInAnonymously(this.auth)
      .then((credential) => {
        const user = credential.user;
        this.currentUserSignal.set(this.auth.currentUser);
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode}: UserService.loginAnon() - ${errorMessage}`);
        return false;
      });
  }

  logout(): Promise<boolean> {
    return this.auth.signOut()
      .then(() => {
        this.currentUserSignal.set(null);
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode}: UserService.loginAnon() - ${errorMessage}`);
        return false;
      });
  }

}
