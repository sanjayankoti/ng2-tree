import { TreeDataService } from './../shared/tree-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'node-component',
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.css']
})

export class NodeComponent implements OnInit {
    @Input() item: any;
    @Input() type: any;
    isExpanded: Boolean = false;

    constructor(private treeDataService: TreeDataService) { }

    ngOnInit() { }

    itemClick(event) {
        console.log('SELECTED NODE ITEM', this.item);
        this.treeDataService.setNodeItem(this.item);
        this.toggle();
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
        console.log(this.isExpanded + ' ' + this.item.name);
    }
}
