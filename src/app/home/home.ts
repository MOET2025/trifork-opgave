import { Component, inject } from '@angular/core';
import { DogImage } from '../dog-image';

/** IMPORTANT! THIS FILE IS OLD AND UNUSED. WILL BE DELETED BEFORE HAND-IN. IS HERE FOR REFERENCE PURPOSES */
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

//class that handles the home page logic
//fetching initial dog image
//fetching new dog image on button click
//updating favorite images array on button click
//removing favorite images on button click
export class Home {
  dogImageService = inject(DogImage);
  favArray = this.dogImageService.favImgUrlArray(); //string[] = [];
  dogImageUrl = this.dogImageService.imageUrl(); //this.dogImageService.getDogImage();

  /*getDogImageOnClick(): void {
    //this.dogImageUrl = this.dogImageService.getDogImage();
    this.dogImageService.loadRandomDogImage();
    this.dogImageUrl = this.dogImageService.imageUrl();
  }*/
 async getDogImageOnClick() {
  try {
    await this.dogImageService.loadRandomDogImage();
    
  } catch (error) {
    console.error('Error loading dog image on click:', error);
  }
  this.dogImageUrl = this.dogImageService.imageUrl();
 }

  setFavDogImageOnClick(): void {
    this.dogImageService.setFavDogImage(this.dogImageUrl);
    this.favArray = this.dogImageService.favImgUrlArray();
  }

  //todo stupid to have the same function in two files
  imgIsFav(imageUrl: string): boolean {
    return this.dogImageService.imgIsFav(imageUrl);
  }

  removeFavDog(imageUrl: string): void {
    this.favArray = this.favArray.filter(url => url !== imageUrl);
    this.dogImageService.favImgUrlArray.set(this.favArray);
  }
}
