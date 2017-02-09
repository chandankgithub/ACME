import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import {ProductService} from './product.service'

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    //styles:['th{color:blue;}'],
    styleUrls:['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 35;
    imageMargin: number = 2;
    isImageVisible: boolean = false;
    filterText: string = '';
    errorMessage: string=''
    products: IProduct[];

    private _productService: ProductService;

    constructor(productService: ProductService){
        this._productService = productService;
    }
    
    toggleImage(): void {
        this.isImageVisible = !this.isImageVisible
    };
    ngOnInit() : void{
        this._productService.getProducts()
        .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    };
    onStarClicked(message: string): void{
        this.pageTitle = this.pageTitle + ' ' + message;
    }
}