import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private productUrl: string = 'api/products/products.json'
    constructor(private _http: Http){

    }
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productUrl)
                         .map( (response:Response) => <IProduct[]> response.json())
                         .do(data => console.log(JSON.stringify(data)))
                         .catch(this.exceptionHandler)
    }
    private exceptionHandler(error: Response){
        console.log(error);
        return Observable.throw(error.json())
    }
}