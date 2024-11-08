import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface SearchResult {
  id: number;
  name: string;
  type: 'restaurant' | 'food';
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private data: SearchResult[] = [

    {id:1, name: 'Sangeetha Veg Restaurant', type: 'restaurant' },
    {id:2, name: 'Akshayam Tiffin Point', type: 'restaurant' },
    {id:3, name: 'Hotel Annapoornaa', type: 'restaurant' },
    {id:4, name: 'The Cafe Chennai', type: 'restaurant' },
    {id:5, name: 'Veg Daawat by Behrouz', type: 'restaurant' },
    { id:6,name: 'FB Cakes', type: 'restaurant' },
    {id:7, name: 'Veg Meals by Lunchbox', type: 'restaurant' },
    {id:8, name: 'Makhani Darbar', type: 'restaurant' },
    { id:9,name: 'A2B - Adyar Ananda Bhavan', type: 'restaurant' },
    {id:10, name: 'Sweet Truth - Cake and Desserts', type: 'restaurant' },
    { id:11,name: 'The Good Bowl', type: 'restaurant' },
    { id:12,name: 'The Biryani Life', type: 'restaurant' },
    {id:13, name: 'Behrouz Biryani', type: 'restaurant' },
    { id:14,name: 'Faasos - Wraps, Rolls', type: 'restaurant' },
    {id:15, name: 'LunchBox - Meals and Thalis', type: 'restaurant' },
    {id:16, name: 'Kwality Walls Ice Cream and More', type: 'restaurant' },

    { id:22,name: 'Dosa', type: 'food' },
    { id:23,name: 'Biryani', type: 'food' },
    {id:24, name: 'Idli', type: 'food' },
    { id:25,name: 'Cakes', type: 'food' },
    { id:26,name: 'Parotta', type: 'food' },
    { id:27,name: 'Pongal', type: 'food' },
    { id:28,name: 'Paratha', type: 'food' },
    { id:29,name: 'Poori', type: 'food' },
    {id:30, name: 'Vada', type: 'food' },
    { id:31,name: 'Chole', type: 'food' },
    {id:32, name: 'Shake', type: 'food' },
    {id:33, name: 'Omelette', type: 'food' },
  ];

  search(term: string): Observable<SearchResult[]> {
    if (!term.trim()) {

      return of([]);
    }

    const results = this.data.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    return of(results);
  }
}