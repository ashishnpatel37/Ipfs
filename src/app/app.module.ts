import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NestDropDownComponent } from './nest-drop-down/nest-drop-down.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NestDropDownComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     BrowserAnimationsModule, 
     MatButtonModule, 
     MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
