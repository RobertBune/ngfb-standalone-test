import { Injectable, computed, signal } from '@angular/core';
import { User, getAuth, signInAnonymously } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSignal = signal<User | null>(null);
  readonly currentUser = computed(() => this.currentUserSignal() !== null ? 'Anonymous' : null);
  readonly isLoggedIn = computed(() => this.currentUserSignal() !== null)

  constructor() {
    setTimeout(() => {
      const auth = getAuth();
      if (auth.currentUser !== null) {
        this.currentUserSignal.set(auth.currentUser);
      }
    }, 1000);
  }

  public loginAnon(): Promise<boolean> {
    const auth = getAuth();
    return signInAnonymously(auth)
      .then((credential) => {
        const user = credential.user;
        this.currentUserSignal.set(auth.currentUser);
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
    const auth = getAuth();
    return auth.signOut()
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
