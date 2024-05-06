import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { ImgComponent } from './img/img.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ImgComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngfb-standalone-test';

  private readonly router = inject(Router);
  protected readonly authService = inject(AuthService);

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
