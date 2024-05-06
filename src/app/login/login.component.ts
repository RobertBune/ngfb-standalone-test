import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  protected loginAnon(): void {
    this.authService.loginAnon()
      .then(() => {
        this.router.navigate(['/builtin']);
      });
  }

}
