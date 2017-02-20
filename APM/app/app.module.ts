import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
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
              RouterModule.forRoot([
                { path:'products', component:ProductListComponent  },
                { path:'product/:id', canActivate:[ProductDetailGuard], component:ProductDetailComponent  },
                { path:'welcome', component:WelcomeComponent  },
                { path:'', redirectTo:'welcome', pathMatch:'full'  },
                { path:'**', redirectTo:'welcome', pathMatch:'full'  }
                ])
              ],
  providers:[ProductDetailGuard],
  declarations: [ 
            AppComponent ,
            WelcomeComponent,
            ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
