import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent {
  foodItems = [
    { id:4,name: 'Dosa', image: 'assets/images/Dosa.avif'},
    {id:12, name: 'Biryani', image: 'assets/images/biryani.png' },
    { id:1,name: 'Idli', image: 'assets/images/idly.png' },
    {id:6, name: 'Cakes', image: 'assets/images/cake.png' },
    { id:9,name: 'Parotta', image: 'assets/images/parrota.png' },
    { id:3,name: 'Pongal', image: 'assets/images/pongal.png' },
    { id:8,name: 'Paratha', image: 'assets/images/paratha.png' },
    { id:1,name: 'Poori', image: 'assets/images/poori.png' },
    { id:1,name: 'Vada', image: 'assets/images/vada.png' },
    {id:1, name: 'Chole', image: 'assets/images/chole.png' },
    { id:1,name: 'Shake', image: 'assets/images/shakes.png' },
    { id:1,name: 'Omelette', image: 'assets/images/omelette.png' },
  ];

  currentIndex = 0;
  visibleItems = 5; 
  itemWidth = 160; 

  constructor(private router: Router) {}

  navigateToRestaurantMenu(restaurantId: number): void {
    this.router.navigate([`/restaurant`, restaurantId]);
  }

  prevSlide() {

    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  nextSlide() {

    const maxIndex = this.foodItems.length - this.visibleItems;
    this.currentIndex = Math.min(maxIndex, this.currentIndex + 1);
  }
}