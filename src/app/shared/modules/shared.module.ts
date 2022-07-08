import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BootstrapModule } from './bootstrap.module';
import { MaterialModule } from './material.module';

@NgModule({
  imports: SharedModule.MODULE_LIST,
  exports: SharedModule.MODULE_LIST
})
export class SharedModule {
  static readonly MODULE_LIST = [
    HttpClientModule,
    BootstrapModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule
  ];
}
