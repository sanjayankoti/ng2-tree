import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TreeDataService } from './../shared/tree-data.service';

@Component({
  selector: 'ng4-tree-component',
  templateUrl: 'tree.component.html'
})

export class TreeComponent implements OnInit {
  @Output() click = new EventEmitter<any>();
  public formatDataList = [];
  @Input()
  set data(value: any) {
    if (value.length > 0) {
      this.formatData(value);
    }
  }

  constructor(private treeDataService: TreeDataService) {
    this.treeDataService.nodeItemEmitter.subscribe((item) => {
      this.click.emit(item);
    });
  }

  formatData(data) {
    let dataList = [];
    for (let i = 0; i < data.length; i++) {
      let subList = [];
      for (let j = 0; j < data.length; j++) {
        if (data[i]['locationGroupID'] === data[j]['parentGroup']) {
          subList.push(data[j]);
        }
      }
      data[i]['subs'] = subList;
      dataList.push(data[i]);
    }
    this.formatDataList.push(dataList[0]);
  }

  ngOnInit() { }
}
