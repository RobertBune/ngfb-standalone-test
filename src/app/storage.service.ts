import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public async getImage(src: string) {
    const storage = getStorage();
    const storageRef = ref(storage, src);
    return getDownloadURL(storageRef);
  }

}
