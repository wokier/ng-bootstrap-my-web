import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../app/shared/modules/shared.module';
import { MyTranslateModule } from '../app/shared/modules/translate.module';


describe('LoginComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        MyTranslateModule,
        SharedModule,
        RouterTestingModule
      ],
      providers: [TranslateService]
    }).compileComponents();
  });

  it('crypto js should give the same result', () => {
    expect(CryptoJS.MD5('test').toString(CryptoJS.enc.Base64)).toEqual('CY9rzUYh03PK3k6DJie09g==');
  });

});
