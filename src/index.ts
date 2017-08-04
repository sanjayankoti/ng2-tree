import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './app/tree/tree.component';
import { NodeComponent } from './app/node/node.component';

export * from './app/tree/tree.component';
export * from './app/node/node.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TreeComponent,
    NodeComponent
  ],
  exports: [
    TreeComponent,
    NodeComponent
  ]
})

export class Ng2TreeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2TreeModule,
    };
  }
}
