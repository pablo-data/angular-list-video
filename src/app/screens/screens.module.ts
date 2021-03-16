import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchVideoScreenComponent } from './search-video-screen/search-video-screen.component';
import { ListsVideoScreenComponent } from './lists-video-screen/lists-video-screen.component';

import { SearchBarComponent } from './../components/search-bar/search-bar.component';
import { ButtonSearchComponent} from './../components/button-search/button-search.component';
import { VideosGroupComponent } from './../components/videos-group/videos-group.component';
import { DragDropComponent} from './../components/drag-drop/drag-drop.component';
import {BoxVideoComponent} from './../components/box-video/box-video.component';


import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchVideoScreenComponent, 
    ListsVideoScreenComponent, 
    SearchBarComponent,
    ButtonSearchComponent,
    VideosGroupComponent,
    DragDropComponent,
    BoxVideoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ScreensModule { }
