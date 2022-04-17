import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TabsModule } from 'ngx-tabset';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderOneComponent } from './shared/header/header-one/header-one.component';
import { ProductBoxOneComponent } from './components/product/product-box-one/product-box-one.component';
import { FooterOneComponent } from './shared/footer/footer-one/footer-one.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartVariationComponent } from './modal/cart-variation/cart-variation.component';
import { QuickViewComponent } from './modal/quick-view/quick-view.component';
import { CartModalComponent } from './modal/cart-modal/cart-modal.component';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from './translate.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderOneComponent,
    ProductBoxOneComponent,
    FooterOneComponent,
    MenuComponent,
    CartVariationComponent,
    QuickViewComponent,
    CartModalComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
    NgbModule,
    RouterModule,
    CarouselModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
