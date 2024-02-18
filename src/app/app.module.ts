import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyCustomPage } from './my-custom-page/my-custom-page.page';
import { MyCustomPageWithId } from './my-custom-page/my-custom-page-with-id/my-custom-page-with-id';

@NgModule({
  declarations: [AppComponent, MyCustomPage, MyCustomPageWithId],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
