import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import { BuiltinViewComponent } from './builtin-view/builtin-view.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['builtin']);

export const routes: Routes = [
  {
    path: 'builtin',
    component: BuiltinViewComponent,
    canActivate: [ AuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'lazy',
    loadComponent: () => import('./lazy-view/lazy-view.component').then(m => m.LazyViewComponent),
    canActivate: [ AuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    canActivate: [ AuthGuard ],
    data: { authGuardPipe: redirectLoggedInToHome },
  }
];
