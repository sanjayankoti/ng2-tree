import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './app/tree/tree.component';
import { NodeComponent } from './app/node/node.component';
import { TreeDataService } from './app/shared/tree-data.service';

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
  providers: [
    TreeDataService
  ],
  exports: [
    TreeComponent,
    NodeComponent
  ]
})

export class Ng4TreeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng4TreeModule,
    };
  }
}
