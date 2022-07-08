import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeToastComponent } from '../components/type-toast.component';

@NgModule({
  declarations:[
    TypeToastComponent
  ],
  imports: [
    NgbModule
  ],
  exports: [
    TypeToastComponent
  ]
})
export class BootstrapModule {
}
