import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { TopRestaurantCardComponent } from './components/top-restaurant-card/top-restaurant-card.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HeaderComponent, RestaurantCardComponent,TopRestaurantCardComponent, RestaurantsComponent,FooterComponent,RouterLink,RestaurantCardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy-clone';
  isMenuPage: boolean = false;

  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        this.isMenuPage = event.urlAfterRedirects.startsWith('/restaurant/');
      }
    });
  }
}