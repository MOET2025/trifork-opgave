import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DogImageService } from '../images/dog-image-service';
import { FavouriteDogsService } from '../favourites/favourite-dogs-service';

@Component({
  selector: 'app-frontpage',
  imports: [RouterLink],
  templateUrl: './frontpage.html',
  styleUrl: './frontpage.css'
})
export class Frontpage {
  private dogImageService = inject(DogImageService);
  private favouriteDogsService = inject(FavouriteDogsService);
  dogImageUrl = '';
  private count = signal(0);
  showThatDog: boolean = false;

  //runs after Angular has instantialized all comp. inputs with initial values.
  //happens before component's own temp. is initialized - can update comps. state based on initial values
  //i.e. perfect for getting that first url on first pageload
  ngOnInit() {
    this.asyncGetDogImage();
  }

  //private helper method for async call to service class.
  private async asyncGetDogImage(): Promise<string> {
    try {
      this.dogImageService.getRandomDogImage().then(url => {
        this.dogImageUrl = url;
      });
    } catch (error) {
      console.error('Error loading dog image on click:', error);
      return '';
    }
    return this.dogImageUrl;
  }

  async getRandomDogImageOnClick(): Promise<string> {
    return this.asyncGetDogImage();
  }

  addDogAsFavouriteOnClick(): void {
    this.favouriteDogsService.addFavouriteDog(this.dogImageUrl);
  }

  isDogFavourite(dogUrl: string): boolean {
    if(this.favouriteDogsService.getFavouriteDogById(dogUrl) === undefined ) {
      return false;
    }
    return true;
  }

  getThisDog(): void {
    if(this.count() < 2) {
      this.count.update(value => value + 1);
      localStorage.setItem('count', '1');
      return;
    }
    this.showThatDog = true;
    this.count.set(0);
    localStorage.getItem('count');
    return;
  }

}
