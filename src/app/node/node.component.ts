import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'node-component',
    templateUrl: './node.component.html',
})

export class NodeComponent implements OnInit {
    @Input() item: any;
    @Input() type: any;
    isExpanded: Boolean = false;

    ngOnInit() {
        // console.log(this.item);
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
        console.log(this.isExpanded + ' ' + this.item.name);
    }
}