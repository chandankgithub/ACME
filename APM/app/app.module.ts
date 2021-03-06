import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import {AppRoutingModule} from './app-routing.module'

import { AppComponent }  from './app.component';

import {WelcomeComponent} from './home/welcome.component'
import {ProductListComponent } from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component'
import {ProductDetailGuard} from './products/product-detail-guard.service'
import {ProductFilterPipe } from './products/product-pipe';
import { StarComponent } from './shared/star.component';

import {ProductModule} from './products/product.module';

@NgModule({
  imports: [ 
              BrowserModule, 
              HttpModule,
              ProductModule, 
              AppRoutingModule
              ],
  
  declarations: [ 
            AppComponent ,
            WelcomeComponent,
            ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
