import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCustomPageRoutingModule } from './my-custom-page-routing.module';

import { MyCustomPage } from './my-custom-page.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyCustomPageRoutingModule],
  declarations: [MyCustomPage],
})
export class MyCustomPagePageModule {}
