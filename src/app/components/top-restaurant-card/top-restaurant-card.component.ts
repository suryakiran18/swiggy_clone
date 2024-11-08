import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-restaurant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-restaurant-card.component.html',
  styleUrls: ['./top-restaurant-card.component.css']
})
export class TopRestaurantCardComponent {
  restaurantItems = [
    {id:17, name: 'Pizza Hut', image: 'assets/images/pizzahut.png', discount: '50% OFF UPTO ₹100', rating: 4.3, time: '35-40 mins', categories: 'Pizzas', location: 'Tambaram' },
    {id:18,name: 'KFC', image: 'assets/images/kfc.png', discount: 'ITEMS AT ₹89', rating: 4.2, time: '30-35 mins', categories: 'Burgers, Fast Food, Rolls & Wraps', location: 'Selaiyur' },
    {id:19, name: 'Chinese Wok', image: 'assets/images/wok.png', discount: 'ITEMS AT ₹149', rating: 4.2, time: '40-45 mins', categories: 'Chinese, Asian, Tibetan, Desserts', location: 'Tambaram' },
    { id:20,name: 'LunchBox - Meals and Thali', image: 'assets/images/lunchbox.png', discount: 'ITEMS AT ₹149', rating: 4.4, time: '20-25 mins', categories: 'Biryani, North Indian, Punjabi', location: 'Kandigai' },
    { id:21,name: 'Paradise Biryani', image: 'assets/images/paradise.avif', discount: 'ITEMS AT ₹179', rating: 4.1, time: '45-50 mins', categories: 'Biryani, Kebabs, North Indian, Hyderabadi', location: 'Sholinganallur' },
    { id:14,name: 'Faasos - Wraps, Rolls', image: 'assets/images/fasos.avif', discount: '50% OFF UPTO ₹100', rating: 4.2, time: '25-30 mins', categories: 'Kebabs, Fast Food, Snacks, American, Healthy Food, Desserts, Beverages', location: 'Kandigai' },
  ];

  currentIndex = 0;
  visibleItems = 4;

  constructor(private router: Router) {}

  get visibleRestaurantItems() {
    return this.restaurantItems.slice(this.currentIndex, this.currentIndex + this.visibleItems);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex + this.visibleItems < this.restaurantItems.length) {
      this.currentIndex++;
    }
  }

  navigateToRestaurantMenu(restaurantId: number): void {
    this.router.navigate([`/restaurant`, restaurantId]);
  }
}
