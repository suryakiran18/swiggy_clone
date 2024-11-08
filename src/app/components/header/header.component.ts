import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service'; 
import { FavoritesService } from '../../services/favorites.service';  

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [FormsModule, CommonModule],
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  searchResults: { name: string; type: 'restaurant' | 'food' }[] = [];
  showSignInForm = false;
  userData = { name: '', mobile: '' };
  userName: string | null = null;

  cartItemsCount: number = 0;
  totalAmount: number = 0;
  favoritesCount: number = 0;
  favoriteRestaurants: string[] = [];
  showFavoritesList = false;

  constructor(
    private searchService: SearchService,
    private http: HttpClient,
    private cartService: CartService, 
    private favoritesService: FavoritesService 
  ) {}

  ngOnInit(): void {
    this.updateCartDisplay();

    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        this.userName = storedUserName;
      }
    }

    this.cartService.getCartItems().subscribe((items) => {
      this.cartItemsCount = items.length;
    });

    this.cartService.getCartTotal().subscribe((total) => {
      this.totalAmount = total;
    });

    this.favoritesService.getFavorites().subscribe((favorites) => {
      this.favoritesCount = favorites.length;
      this.favoriteRestaurants = favorites.map(restaurant => restaurant.name);
    });
  }

  onSearch(): void {
    this.searchService.search(this.searchTerm).subscribe((results) => {
      this.searchResults = results;
    });
  }

  toggleSignInForm() {
    this.showSignInForm = !this.showSignInForm;
  }

  signIn(event: Event) {
    event.preventDefault();
    const url = 'https://672c7f931600dda5a9f8af6e.mockapi.io/userdata';

    this.http.post(url, this.userData).subscribe(
      response => {
        console.log('Sign-in successful:', response);
        this.showSignInForm = false;

        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('userName', this.userData.name);
        }
        this.userName = this.userData.name;
      },
      error => {
        console.error('Sign-in failed:', error);
      }
    );
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('userName');
    }
    this.userName = '';
    this.favoritesService.clearFavorites();  
  }

  addToCart(item: any) {
    if (this.userName) {
      this.cartService.addToCart(item);
    } else {
      alert('Please sign in to add items to the cart');
    }
  }
  placeOrder(event?: Event) {
    if (event) {
      event.preventDefault();  
    }

    if (this.userName) {
      if (this.cartItemsCount === 0) {
        alert('Your cart is empty! Please add items to the cart before placing the order.');
        return;
      }

      const orderData = {
        userDetails: this.userData,
        cartItems: this.cartItemsCount,
        totalAmount: this.totalAmount,
        favoriteRestaurants: this.favoriteRestaurants,
      };

      console.log('Order Data:', orderData);

      if (!orderData.cartItems || orderData.cartItems === 0 || orderData.totalAmount === 0) {
        console.error('Order data is invalid: empty cart or zero total amount');
        alert('Order cannot be placed. Please check your cart.');
        return;
      }
      const url = 'https://672c7f931600dda5a9f8af6e.mockapi.io/orders';

      this.cartService.placeOrder(this.userData, 'Restaurant Name').subscribe(
        (response) => {
          if (response.success) {
            console.log('Order placed successfully:', response);
            this.cartService.clearCart();  
            alert('Order placed successfully!');
          } else {
            alert('Failed to place order. Please try again.');
          }
        },
        (error) => {
          console.error('Error placing order:', error);
          alert('There was an error placing your order. Please try again.');
        }
      );
    } else {
      alert('Please sign in to place an order');
    }

    console.log('Cart Items:', this.cartItemsCount);
    console.log('Total Amount:', this.totalAmount);
    console.log('User Data:', this.userData);
  }

  updateCartDisplay() {
    this.cartService.getItemsCount().subscribe(count => this.cartItemsCount = count);
    this.cartService.getCartTotal().subscribe(total => this.totalAmount = total);
  }

  getFavoritesCount(): number {
    return this.favoritesCount;
  }

  toggleFavoritesList() {
    this.showFavoritesList = !this.showFavoritesList;
  }
}