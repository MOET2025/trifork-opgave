import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DogImageService } from '../../../services/image-service/images/dog-image-service';
import { AdoptedDogsService } from '../../../services/adopted-service/adopted/adopted-dogs-service';
import { Button } from '../../../components/button/button/button';
import { Easteregg } from '../../../components/easteregg/easteregg/easteregg';

//component for handling view and user interactions on frontpage
@Component({
  selector: 'app-frontpage', 
  imports: [RouterLink, Button, Easteregg],
  templateUrl: './frontpage.html',
  styleUrl: './frontpage.css'
})
export class Frontpage {
  private dogImageService = inject(DogImageService);
  private adoptedDogsService = inject(AdoptedDogsService);
  currentDogImageUrl = '';
  showEasterEgg = false;
  count = signal(0);

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
        this.currentDogImageUrl = url;
      });
    } catch (error) {
      console.error('Error loading dog image on click:', error);
      return '';
    }
    return this.currentDogImageUrl;
  }

  async getRandomDogImageOnClick(): Promise<string> {
    return this.asyncGetDogImage();
  }

  addDogAsAdoptedOnClick(): void {
    this.adoptedDogsService.add(this.currentDogImageUrl);
  }

  isDogAdopted(dogUrl: string): boolean {
    if(this.adoptedDogsService.getById(dogUrl) === undefined ) {
      return false;
    }
    return true;
  }

  easterEgg() {
    if(this.showEasterEgg) {
      this.showEasterEgg = false;
    }

    this.count.update(value => value + 1);

    if(this.count() >= 3) {
      this.showEasterEgg = true;
      this.count.set(0);
    }
  }


}
