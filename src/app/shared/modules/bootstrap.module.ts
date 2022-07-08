import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap/toast/toast';
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
