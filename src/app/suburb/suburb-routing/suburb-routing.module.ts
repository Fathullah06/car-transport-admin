import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { SuburbComponent } from '../suburb.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SuburbComponent,
    data: {
      title: 'Suburb Component'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class SuburbRoutingModule { }
