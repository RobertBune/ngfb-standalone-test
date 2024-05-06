import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-builtin-view',
  standalone: true,
  imports: [ImgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './builtin-view.component.html'
})
export class BuiltinViewComponent {

}
