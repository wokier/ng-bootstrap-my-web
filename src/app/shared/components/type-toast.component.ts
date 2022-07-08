import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap/toast/toast';
import { TranslateService } from '@ngx-translate/core';

export enum ToastType {
  SUCCESS= 'success',
  ERROR= 'danger',
  WARN= 'warning',
  INFO= 'info'
};

export class TypeToastConfig {
  public autohide = false;
  public header: string;
  public content: string;
}

@Component({
  selector: 'my-toast',
  template: '<ngb-toast #toast [autohide]="config.autohide" header="{{translateService.get(config.header)}}">{{config.content}}</ngb-toast>'
})
export class TypeToastComponent {

  @ViewChild(NgbToast)
  toast :NgbToast;

  // @ts-ignore
  constructor(public config: TypeToastConfig,
              private element: ElementRef, private renderer: Renderer2,
              public translateService: TranslateService) {
  }

  public show(type: ToastType, message1: string, message2?: string){
    this.config.content= message2 ? message1 + '<br>' + message2 : message1;
    switch (type) {
      case ToastType.INFO:
        this.config.autohide = true;
        this.config.header = '';
        break;
      case ToastType.SUCCESS:
        this.config.autohide = true;
        this.config.header = '';
        break;
      case ToastType.ERROR:
        this.config.autohide = false;
        this.config.header= 'toast.error';
        break;
      case ToastType.WARN:
        this.config.autohide = false;
        this.config.header= 'toast.warn';
        break;
    }
    // alert-success style comes from bootstrap
    this.renderer.addClass(this.element.nativeElement, `alert-${type}`);
  }

  public hide(){
    this.toast.hide();
  }

}
