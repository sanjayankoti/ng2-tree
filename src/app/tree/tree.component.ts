import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-tree-component',
  templateUrl: 'tree.component.html'
})

export class TreeComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() { }
}