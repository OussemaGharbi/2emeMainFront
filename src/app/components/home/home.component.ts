import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  public themeLogo: string = 'assets/images/icon/logo-10.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'electronics');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  // Collection banner
  public collections = [{
    image: 'assets/images/collection/electronics/1.jpg',
    save: '10% off',
    title: 'speaker'
  }, {
    image: 'assets/images/collection/electronics/2.jpg',
    save: '10% off',
    title: 'earplug'
  },
  {
    image: 'assets/images/collection/electronics/3.jpg',
    save: '10% off',
    title: 'best deal'
  }]

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#6d7e87');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
      return ''
    })
  }

}