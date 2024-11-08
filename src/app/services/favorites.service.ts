import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); 
  private favorites: any[] = []; 

  constructor() {

    if (typeof window !== 'undefined' && window.localStorage) {
      this.favorites = this.loadFavorites(); 
      this.favoritesSubject.next(this.favorites); 
    }
  }

  private loadFavorites(): any[] {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  private saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  addToFavorites(item: any): void {
    if (!this.isFavorite(item)) {
      this.favorites.push(item); 
      this.saveFavorites(); 
      this.favoritesSubject.next(this.favorites); 
    }
  }

  removeFromFavorites(item: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== item.id); 
    this.saveFavorites(); 
    this.favoritesSubject.next(this.favorites); 
  }

  isFavorite(item: any): boolean {
    return this.favorites.some(fav => fav.id === item.id); 
  }

  getFavorites() {
    return this.favoritesSubject.asObservable(); 
  }

  clearFavorites(): void {
    this.favorites = [];  
    this.favoritesSubject.next(this.favorites);  
    this.saveFavorites();  
  }
}