import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'
import { IgxSliderModule,IgxInputGroupModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  { path : '', component : HomeComponent},
  { path : 'checkout', component : CheckoutComponent},
  { path : 'checkout/:id', component : CheckoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CartIconComponent,
    FilterComponent,
    SortComponent,
    ShoppingListComponent,
    FooterComponent,
    CheckoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxSliderModule,
    IgxInputGroupModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
