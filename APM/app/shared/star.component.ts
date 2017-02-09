import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId:module.id,
    templateUrl: 'star.component.html',
    styleUrls:['star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;
    @Output() notifyStarClick: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }

    onStarClick() : void{
        this.notifyStarClick.emit(`Star Rating is ${this.rating}`)
    }
}