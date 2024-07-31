import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './shared/order.service';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './orders/order/order.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
