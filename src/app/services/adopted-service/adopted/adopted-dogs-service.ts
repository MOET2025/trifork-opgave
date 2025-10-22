import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//service class for getting, adding and removing adopted dogs
export class AdoptedDogsService {
  private adoptedDogs = signal<string[]>([]);
  
  getAll(): string[] {
    return this.adoptedDogs();
  }

  getById(id: string): string | undefined {
    return this.adoptedDogs().find(url => url === id);
  }

  add(dogUrl: string): void {
    this.adoptedDogs.update(array => [...array, dogUrl]);
  }

  remove(dogUrl: string): void {
    this.adoptedDogs.update(array => array.filter(url => url !== dogUrl));
  }

}
