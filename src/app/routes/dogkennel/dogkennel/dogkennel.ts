import { Component, inject } from '@angular/core';
import { AdoptedDogsService } from '../../../services/adopted-service/adopted/adopted-dogs-service'; 
import { Button } from '../../../components/button/button/button'; 

//component for handling user view and interactions in dogkennel
@Component({
  selector: 'app-dogkennel',
  imports: [Button],
  templateUrl: './dogkennel.html',
  styleUrl: './dogkennel.css'
})
export class Dogkennel {
  private adoptedDogsService = inject(AdoptedDogsService);
  adoptedDogImages: string[] = [];
  
  private getAllAdoptedImagesFromService(): string[] {
    return this.adoptedDogsService.getAll();
  }

  constructor() {
    this.adoptedDogImages = this.getAllAdoptedImagesFromService();
  }

  removeAdoptedDogOnClick(dogUrl: string): void {
    this.adoptedDogsService.remove(dogUrl);
    this.adoptedDogImages = this.getAllAdoptedImagesFromService();
  }

}
