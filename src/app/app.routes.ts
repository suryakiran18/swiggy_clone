// app.routes.ts
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
export const routes: Routes = [
    { path: 'restaurants', component: RestaurantMenuComponent },
    { path: 'restaurant/:id', component: RestaurantMenuComponent},
    { path: 'menu/:type/:name', component: RestaurantMenuComponent},
  ];