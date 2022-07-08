import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './navigation/banner/banner.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { LoginComponent } from './page/login/login.component';
import { SecurityModule } from './shared/modules/security.module';
import { ServiceModule } from './shared/modules/service.module';
import { SharedModule } from './shared/modules/shared.module';
import { MyTranslateModule } from './shared/modules/translate.module';

@NgModule({
  declarations: [
    MenuComponent,
    BannerComponent,
    AppComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,
    ServiceModule,
    BrowserAnimationsModule,
    SharedModule,
    MyTranslateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
