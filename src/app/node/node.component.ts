import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'node-component',
    templateUrl: './node.component.html',
})

export class NodeComponent implements OnInit {
    @Input() item: any;
    @Input() type: any;
    @Output() click = new EventEmitter<any>();
    isExpanded: Boolean = false;

    ngOnInit() {
        // console.log(this.item);
    }

    itemClick(item: any) {
        this.click.emit({ item: this.item });
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
        console.log(this.isExpanded + ' ' + this.item.name);
    }
}