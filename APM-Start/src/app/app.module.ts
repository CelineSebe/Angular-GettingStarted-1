import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './products/convert-to-spaces-pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent, 
    ConvertToSpacesPipe, 
    StarComponent, ProductDetailComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
