import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './img.component.html'
})
export class ImgComponent {

  public src = input.required<string>();

  private readonly storageService = inject(StorageService);

  protected url = signal<string | null>(null);

  constructor() {
    effect(() => {
      this.storageService.getImage(this.src())
        .then((url) => {
          this.url.set(url);
        })
        .catch((err) => {
          this.url.set(null)
        })
    }, {
      allowSignalWrites: true
    })
  }

}


