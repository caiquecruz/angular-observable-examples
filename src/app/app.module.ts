import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule, DialogModule } from 'primeng/primeng';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { CsGoComponent } from './cs-go/cs-go.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CsGoComponent,
    MenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    DialogModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
