import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//service class making data available across components
export class FavouriteDogsService {
  //private signal to hold array of favourite dog image urls
  private favouriteDogs = signal<string[]>([]);
  
  //get string array of favourite dog image urls
  getAllFavouriteDogs(): string[] {
    return this.favouriteDogs();
  }

  getFavouriteDogById(id: string): string | undefined {
    return this.favouriteDogs().find(url => url === id);
  }

  //add a dog image url to the favourite dogs array
  addFavouriteDog(dogUrl: string): void {
    this.favouriteDogs.update(array => [...array, dogUrl]);
  }

  //remove a dog image url from the favourite dogs array
  removeFavouriteDog(dogUrl: string): void {
    this.favouriteDogs.update(array => array.filter(url => url !== dogUrl));
  }

}
