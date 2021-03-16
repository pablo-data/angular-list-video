import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import {AppRoutingModule} from './../app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


import {YouTubePlayerModule} from '@angular/youtube-player'
import { DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule,
    YouTubePlayerModule
  ],
  exports: [
    ToolbarComponent,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    YouTubePlayerModule
  ]

})
export class SharedModule { }
