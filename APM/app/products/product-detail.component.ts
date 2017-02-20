import {Component, OnInit} from '@angular/core'
import{ActivatedRoute, Router} from '@angular/router'
@Component({
    moduleId:module.id,
    templateUrl:'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    private pageTitle: string 
    private _id: number
    constructor(private _route: ActivatedRoute, 
                private _router: Router){

    }
    ngOnInit():void{
        this.pageTitle=`Product-Detail`
        this._id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${this._id}`;
    }
    onBack(): void{
        this._router.navigate(['/products']);
    }
}