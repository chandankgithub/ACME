import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product'

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], searchTerm: string): IProduct[] {

        searchTerm = searchTerm ? searchTerm.toLowerCase() : null;

        return searchTerm ? value.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(searchTerm) !== -1) : value;

    }
}