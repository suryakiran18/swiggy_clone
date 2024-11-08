import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  restaurantId: string | null = null;
  restaurantMenu: any;
  restuarantname :any;

  restaurantData = [
    {
      id: '1',
      name: 'Sangeetha Veg Restaurant',
      menu: [
        { name: 'Dosa', price: 80, description: 'Crispy South Indian crepe.', rating: 4.6,  image: 'assets/images/dosasan.avif' },
        { name: 'Idli', price: 40, description: 'Soft steamed rice cakes.', rating: 4.4, image: 'assets/images/idly.avif' },
        { name: 'Vada', price: 50, description: 'Deep-fried savory donut.', rating: 4.5, image: 'assets/images/vada.avif' }
      ]
    },
    {
      id: '2',
      name: 'Akshayam Tiffin Point',
      menu: [
        { name: 'Pongal', price: 120, description: '', rating: 4.7, image: 'assets/images/pongal.avif' },
        { name: 'Dosa', price: 100, description: '', rating: 4.6, image: 'assets/images/dosaak.avif' }
      ]
    },
    {
      id: '3',
      name: 'Hotel Annapoornaa',
      menu: [
        { name: 'Sambar Rice', price: 60, description: 'A traditional South Indian rice dish with sambar.', rating: 4.8, image: 'assets/images/sambar_rice.avif' },
        { name: 'Rava Kesari', price: 90, description: 'A dessert made from semolina, ghee, and dry fruits.', rating: 4.7, image: 'assets/images/rava_kesari.avif' }
      ]
    },
    {
      id: '4',
      name: 'The Cafe Chennai',
      menu: [
        { name: 'Masala Dosa', price: 90, description: 'Stuffed dosa with spicy potato filling.', rating: 4.6, image: 'assets/images/masala_dosa.avif'  },
        { name: 'Paneer Tikka', price: 150, description: 'Grilled paneer cubes marinated in spices.', rating: 4.6, image: 'assets/images/paneer_tikka.avif' }
      ]
    },
    {
      id: '5',
      name: 'Veg Daawat by Behrouz',
      menu: [
        { name: 'Veg Biryani', price: 200, description: 'Flavorful veg biryani with spices.', rating: 4.5, image: 'assets/images/veg_biryani.avif' },
        { name: 'Paneer Butter Masala', price: 180, description: 'Paneer cooked in creamy tomato gravy.', rating: 4.4, image: 'assets/images/paneer_butter_masala.avif' }
      ]
    },
    {
      id: '6',
      name: 'FB Cakes',
      menu: [
        { name: 'Chocolate Truffle Cake', price: 300, description: 'Rich chocolate truffle cake.', rating: 4.8, image: 'assets/images/chocolate_truffle.avif' },
        { name: 'Vanilla Cupcake', price: 70, description: 'Soft vanilla cupcake with icing.', rating: 4.5, image: 'assets/images/vanilla_cupcake.avif' }
      ]
    },
    {
      id: '7',
      name: 'Veg Meals by Lunchbox',
      menu: [
        { name: 'Dal Tadka', price: 150, description: 'Lentils tempered with spices.', rating: 4.7, image: 'assets/images/dal_tadka.avif' },
        { name: 'Paneer Bhurji', price: 180, description: 'Scrambled paneer with spices.', rating: 4.6, image: 'assets/images/paneer_bhurji.avif' }
      ]
    },
    {
      id: '8',
      name: 'Makhani Darbar',
      menu: [
        { name: 'Paratha', price: 50, description: 'Rich in fiber', rating: 4.7, image: 'assets/images/Paratha.avif' },
        { name: 'Murg Makhani', price: 250, description: 'Butter chicken in creamy tomato gravy.', rating: 4.7, image: 'assets/images/murg_makhani.avif' },
        { name: 'Paneer Makhani', price: 220, description: 'Paneer in a rich, creamy tomato gravy.', rating: 4.6, image: 'assets/images/paneer_makhani.avif' }
      ]
    },
    {
      id: '9',
      name: 'A2B - Adyar Ananda Bhavan',
      menu: [
        { name: 'Parota', price: 80, description: 'Made with maida', rating: 4.6, image: 'assets/images/parrota.png' },
        { name: 'Kesari Bath', price: 50, description: 'Sweet dish made from semolina.', rating: 4.6, image: 'assets/images/kesari_bath.avif' },
        { name: 'Masala Vada', price: 60, description: 'Fried lentil fritter.', rating: 4.5, image: 'assets/images/masala_vada.avif' }
      ]
    },
    {
      id: '10',
      name: 'Sweet Truth - Cake and Desserts',
      menu: [
        { name: 'Red Velvet Cake', price: 250, description: 'Rich red velvet cake with cream cheese frosting.', rating: 4.6, image: 'assets/images/red_velvet.avif' },
        { name: 'Chocolate Mousse', price: 150, description: 'Creamy chocolate mousse.', rating: 4.5, image: 'assets/images/chocolate_mousse.avif' }
      ]
    },
    {
      id: '11',
      name: 'The Good Bowl',
      menu: [
        { name: 'Paneer Biryani', price: 220, description: 'Spiced rice with paneer.', rating: 4.7, image: 'assets/images/paneer_biryani.avif' },
        { name: 'Chicken Biryani', price: 250, description: 'Fragrant biryani with tender chicken pieces.', rating: 4.6, image: 'assets/images/chicken_biryani.avif' }
      ]
    },
    {
      id: '12',
      name: 'The Biryani Life',
      menu: [
        { name: 'Lucknowi Biryani', price: 260, description: 'Traditional Lucknowi biryani.', rating: 4.5, image: 'assets/images/lucknowi_biryani.avif' },
        { name: 'Veg Biryani', price: 200, description: 'Biryani with mixed vegetables.', rating: 4.4, image: 'assets/images/veg_biryani.avif' }
      ]
    },
    {
      id: '13',
      name: 'Behrouz Biryani',
      menu: [
        { name: 'Behrouz Special Biryani', price: 300, description: 'Signature biryani with exotic spices.', rating: 4.7, image: 'assets/images/behrouz_special.avif' },
        { name: 'Veg Kebab Biryani', price: 220, description: 'Biryani with vegetarian kebabs.', rating: 4.5, image: 'assets/images/veg_kebab_biryani.avif' }
      ]
    },
    {
      id: '14',
      name: 'Faasos - Wraps, Rolls',
      menu: [
        { name: 'Chicken Wrap', price: 120, description: 'Chicken wrap with spices and veggies.', rating: 4.6, image: 'assets/images/chicken_wrap.avif' },
        { name: 'Paneer Wrap', price: 110, description: 'Paneer wrap with spices and veggies.', rating: 4.5, image: 'assets/images/paneer_wrap.avif' }
      ]
    },
    {
      id: '15',
      name: 'LunchBox - Meals and Thalis',
      menu: [
        { name: 'Punjabi Thali', price: 200, description: 'Complete Punjabi meal with roti, sabji, dal.', rating: 4.6, image: 'assets/images/punjabi_thali.avif' },
        { name: 'Dal Makhani', price: 150, description: 'Rich and creamy dal makhani.', rating: 4.5, image: 'assets/images/dal_makhani.avif' }
      ]
    },
    {
      id: '16',
      name: 'Kwality Walls Ice Cream and More',
      menu: [
        { name: 'Chocolate Ice Cream', price: 100, description: 'Rich and creamy chocolate ice cream.', rating: 4.7, image: 'assets/images/chocolate_ice_cream.avif' },
        { name: 'Vanilla Sundae', price: 90, description: 'Classic vanilla ice cream with toppings.', rating: 4.6, image: 'assets/images/vanilla_sundae.avif' }
      ]
    },
    {
      id: '17',
      name: 'Pizza Hut',
      menu: [
        { name: 'Pepperoni Pizza', price: 250, description: 'Classic pepperoni pizza with a crispy crust.', rating: 4.5, image: 'assets/images/pepperoni_pizza.avif' },
        { name: 'Cheesy Garlic Bread', price: 120, description: 'Garlic bread with a generous amount of cheese.', rating: 4.6, image: 'assets/images/cheesy_garlic_bread.avif' },
        { name: 'Chocolate Lava Cake', price: 150, description: 'Warm chocolate cake with a gooey center.', rating: 4.8, image: 'assets/images/chocolate_lava_cake.avif' }
      ]
    },
    {
      id: '18',
      name: 'KFC',
      menu: [
        { name: 'Zinger Burger', price: 180, description: 'Crispy chicken burger with a spicy twist.', rating: 4.6, image: 'assets/images/zinger_burger.avif' },
        { name: 'Popcorn Chicken', price: 130, description: 'Bite-sized pieces of crispy chicken.', rating: 4.7, image: 'assets/images/popcorn_chicken.avif' },
        { name: 'Fried Chicken Bucket', price: 300, description: 'Signature KFC fried chicken in a bucket.', rating: 4.8, image: 'assets/images/fried_chicken_bucket.avif' }
      ]
    },
    {
      id: '19',
      name: 'Chinese Wok',
      menu: [
        { name: 'Kung Pao Chicken', price: 220, description: 'Spicy stir-fried chicken with peanuts and vegetables.', rating: 4.7, image: 'assets/images/kung_pao_chicken.avif' },
        { name: 'Vegetable Spring Rolls', price: 90, description: 'Crispy rolls filled with mixed vegetables.', rating: 4.5, image: 'assets/images/vegetable_spring_rolls.avif' },
        { name: 'Chicken Hakka Noodles', price: 160, description: 'Hakka noodles with stir-fried chicken and vegetables.', rating: 4.6, image: 'assets/images/chicken_hakka_noodles.avif' }
      ]
    },
    {
      id: '20',
      name: 'LunchBox - Meals and Thali',
      menu: [
        { name: 'Paneer Butter Masala Thali', price: 200, description: 'Thali with paneer butter masala, rice, and naan.', rating: 4.5, image: 'assets/images/paneer_butter_masala_thali.avif' },
        { name: 'Chicken Biryani', price: 180, description: 'Flavorful chicken biryani with aromatic spices.', rating: 4.7, image: 'assets/images/chicken_biryani.avif' },
        { name: 'Gulab Jamun', price: 80, description: 'Soft and sweet dessert soaked in sugar syrup.', rating: 4.8, image: 'assets/images/gulab_jamun.avif' }
      ]
    },
    {
      id: '21',
      name: 'Paradise Biryani',
      menu: [
        { name: 'Hyderabadi Mutton Biryani', price: 280, description: 'Authentic mutton biryani with rich flavors.', rating: 4.8, image: 'assets/images/mutton_biryani.avif' },
        { name: 'Chicken Tikka', price: 150, description: 'Marinated chicken cooked to perfection.', rating: 4.6, image: 'assets/images/chicken_tikka.avif' },
        { name: 'Masala Papad', price: 40, description: 'Crispy papad topped with masala spices.', rating: 4.5, image: 'assets/images/masala_papad.avif' }
      ]
    },

  ];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    console.log("Restaurant ID: ", this.restaurantId);

    const restaurant = this.restaurantData.find(r => r.id === this.restaurantId);
    if (restaurant) {
      this.restuarantname= restaurant.name;
      this.restaurantMenu = restaurant.menu;
    } else {
      this.restaurantMenu = ['Menu not available'];
    }
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
    alert(`${item.name} added to cart!`);
  }
}