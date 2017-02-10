import {Component} from '@angular/core';
import {ProductService} from './products/product.service'
@Component({
    selector:'pm-app',
    template:`<div> 
                    <h1> </h1> 
                    <div>
                        <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <a class='navbar-brand' [routerLink]="['/welcome']">{{pageTitle}}</a>
                                <ul class='nav navbar-nav'>
                                    <li> <a [routerLink]="['/welcome']">Home </a></li>
                                    <li><a [routerLink]="['/products']">Products</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <router-outlet></router-outlet>
            </div>`,
    providers: [ProductService]
})
export class AppComponent{
    pageTitle: string = `Acme Product Management`
}