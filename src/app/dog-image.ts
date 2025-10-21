import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

//class that handles fetching a random dog image and updating array of favorite images
export class DogImage {
    http = inject(HttpClient);
    imageUrl = signal('');
    favImgUrlArray = signal<string[]>([]);
    //dogUrlArray: string[] = [];

  //fetches a random dog image from the API
  //updates and returns a writable signal containing the image url
  //getDogImage(): void { //WritableSignal<string> {
    /*this.http.get<{message: string}>('https://dog.ceo/api/breeds/image/random').subscribe(config => {
        this.imageUrl.set(config.message);
      }); */
    //return this.imageUrl; //returns a writeable signal containing the image url
//  }

  async loadRandomDogImage() {
    try {
      const config = await firstValueFrom(this.http.get<{message: string}>('https://dog.ceo/api/breeds/image/random'));
      this.imageUrl.set(config.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  }

  //receive writable signal with image url
  //save to an array
  //should also be connected to UI since gallery is dependent on the array
  setFavDogImage(imageUrl: string): void { //(imageUrl: WritableSignal<string>): void {
    //save signal as a string to array
    this.favImgUrlArray.update(currentArray => [...currentArray, imageUrl]);
    //return this.dogUrlArray
  }

  imgIsFav(imageUrl: string): boolean {
    return this.favImgUrlArray().includes(imageUrl);
  }

}
