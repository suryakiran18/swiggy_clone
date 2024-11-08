import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';  

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  restaurantItems = [
    { id: 1, name: 'Sangeetha Veg Restaurant', image: 'assets/images/sangeetha.avif', rating: 4.6, time: '35-40 mins', categories: 'South Indian, North Indian, Chinese', location: 'Urapakkam' },
    { id: 2, name: 'Akshayam Tiffin Point', image: 'assets/images/tiffinpoint.avif', rating: 4.5, time: '30-35 mins', categories: 'South Indian', location: 'OMR Navalur' },
    { id: 3, name: 'Hotel Annapoornaa', image: 'assets/images/annapurna.avif', rating: 4.6, time: '25-30 mins', categories: 'South Indian', location: 'Tambaram' },
    { id: 4, name: 'The Cafe Chennai', image: 'assets/images/cafe.avif', rating: 4.6, time: '35-40 mins', categories: 'South Indian, North Indian, Chinese', location: 'Tambaram' },
    { id: 5, name: 'Veg Daawat by Behrouz', image: 'assets/images/daawat.avif', discount: '50% OFF UPTO ₹100', rating: 4.3, time: '35-40 mins', categories: 'Biryani, North Indian, Kebabs, Mughlai', location: 'Kandigai' },
    { id: 6, name: 'FB Cakes', image: 'assets/images/fb.avif', discount: 'ITEMS AT ₹69', rating: 4.5, time: '35-40 mins', categories: 'Bakery, Snacks, Sweets', location: 'Vandalur' },
    { id: 7, name: 'Veg Meals by Lunchbox', image: 'assets/images/vegmeals.avif', discount: 'ITEMS AT ₹159', rating: 4.5, time: '25-30 mins', categories: 'Biryani, North Indian, Desserts, Beverages', location: 'Arumbakkam' },
    { id: 8, name: 'Makhani Darbar', image: 'assets/images/darbar.avif', discount: '₹125 OFF ABOVE ₹399', rating: 4.3, time: '30-35 mins', categories: 'Kebabs, Mughlai, Beverages, Desserts', location: 'Vandalur Kelambakkam Main Road' },
    { id: 9, name: 'A2B - Adyar Ananda Bhavan', image: 'assets/images/a2b.avif',  rating: 4.5, time: '40-45 mins', categories: 'South Indian,Sweets, Chinese', location: 'Tambaram' },
    { id: 10, name: 'Sweet Truth - Cake and Desserts', image: 'assets/images/sweettruth.avif',discount: '50% OFF UPTO ₹100', rating: 4.5, time: '20-25 mins', categories: 'Snacks,Bakery', location: 'Kandigai' },
    { id: 11, name: 'The Good Bowl', image: 'assets/images/goodbowl.avif', discount: 'ITEMS AT ₹149',rating: 4.5, time: '25-30 mins', categories: 'Biryani,Pasta,Punjabi', location: 'Kandigai' },
    { id: 12, name: 'The Biryani Life', image: 'assets/images/biryanilife.avif', discount: 'ITEMS AT ₹159', rating: 3.9, time: '25-30 mins', categories: 'Biryani,Mughalai,Lucknowi', location: 'Kandigai' },
    { id: 13, name: 'Behrouz Biryani', image: 'assets/images/behrouz.avif', discount: '50% OFF UPTO ₹100', rating: 4.4, time: '30-25 mins', categories: 'Biryani, North Indian, Kebabs, Mughlai', location: 'Kandigai' },
    { id: 14, name: 'Faasos - Wraps, Rolls', image: 'assets/images/fasos.avif', discount: '50% OFF UPTO ₹100', rating: 4.2, time: '30-25 mins', categories: 'Kebabs,FastFood,Snacks', location: 'Kandigai' },
    { id: 15, name: 'LunchBox - Meals and Thalis', image: 'assets/images/lunchbox.png', rating: 4.4, time: '25-30 mins', categories: 'Biryani, North Indian,Punjabi', location: 'Kandigai' },
    { id: 16, name: 'Kwality Walls Ice Cream and More', image: 'assets/images/kwality.avif', discount: '₹100 OFF ABOVE ₹349', rating: 4.2, time: '25-30 mins', categories: 'IceCreams,Desserts', location: 'Chennai VIT' }
  ];

  constructor(private router: Router, private favoritesService: FavoritesService) {}

  navigateToRestaurantMenu(restaurantId: number): void {
    this.router.navigate([`/restaurant`, restaurantId]);
  }

  toggleFavorite(restaurant: any): void {
    if (this.isFavorite(restaurant)) {
      this.favoritesService.removeFromFavorites(restaurant);  
    } else {
      this.favoritesService.addToFavorites(restaurant);  
    }
  }

  isFavorite(restaurant: any): boolean {
    return this.favoritesService.isFavorite(restaurant);  
  }
}