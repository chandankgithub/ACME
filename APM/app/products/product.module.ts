import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail-guard.service';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-pipe';
import { SharedModule } from '../shared/shared.module'
import { ProductRoutingModule } from './product-routing.module'
@NgModule({
    imports: [FormsModule, BrowserModule, RouterModule, SharedModule, ProductRoutingModule],
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
    providers: [ProductDetailGuard, ProductService]
})
export class ProductModule {

}