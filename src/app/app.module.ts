import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdIconModule } from '@angular2-material/icon';
import { SbTabsComponentComponent } from './sb-tabs-component/sb-tabs-component.component';

@NgModule({
  declarations: [
    AppComponent, SbTabsComponentComponent
  ],
  imports: [
	MdButtonModule, 
	MdCardModule,
	MdSidenavModule,
	MdToolbarModule,
	MdIconModule,
	MdTabsModule,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
