import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TreeDataService {
    private nodeItem: BehaviorSubject<object> = new BehaviorSubject<object>({});
    public nodeItemEmitter: Observable<object> = this.nodeItem.asObservable();

    setNodeItem(item) {
        this.nodeItem.next(item);
    }
}
