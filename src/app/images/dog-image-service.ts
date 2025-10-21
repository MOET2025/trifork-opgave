import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//service class that fetches a random dog image
export class DogImageService {
  private http = inject(HttpClient);
  private randomDogImage = '';

  async getRandomDogImage(): Promise<string> {
    try {
      const config = await firstValueFrom(this.http.get<{message: string}>('https://dog.ceo/api/breeds/image/random'));
      this.randomDogImage = config.message;
    } catch (error) {
      console.error('Error fetching dog image:', error);
      return '';
    }
    return this.randomDogImage;
  }
}
