import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-lazy-view',
  standalone: true,
  imports: [ImgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lazy-view.component.html'
})
export class LazyViewComponent {

}
