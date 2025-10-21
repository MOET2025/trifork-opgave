import { Component, inject, signal } from '@angular/core';
import { FavouriteDogsService } from '../favourites/favourite-dogs-service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  private favouriteDogsService = inject(FavouriteDogsService);
  favouriteDogImages: string[] = [];
  
  private getFavouriteImagesFromService(): string[] {
    return this.favouriteDogsService.getAllFavouriteDogs();
  }

  constructor() {
    this.favouriteDogImages = this.getFavouriteImagesFromService();
  }

  removeFavouriteDogOnClick(dogUrl: string): void {
    this.favouriteDogsService.removeFavouriteDog(dogUrl);
    this.favouriteDogImages = this.getFavouriteImagesFromService();
  }

}
