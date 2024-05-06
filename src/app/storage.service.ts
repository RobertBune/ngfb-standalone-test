import { Injectable, inject } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = inject(Storage);

  public async getImage(src: string) {
    const storageRef = ref(this.storage, src);
    return getDownloadURL(storageRef);
  }

}
