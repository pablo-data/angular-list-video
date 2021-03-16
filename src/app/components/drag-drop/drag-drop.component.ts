import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { NameVideoService } from './../../core/services/name-video/name-video.service';
import {Video} from './../../core/models/video.model';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  @Output() videoEmitter: EventEmitter<Video>;
  @Output() listVideosEmitter: EventEmitter<Video[]>; 

  public videos: Video[] = [];

  public video: Video = {
    title: '',
    description: '',
    videoId:  ''
  };


  constructor(private nameVideoService: NameVideoService) { 
    this.videoEmitter = new EventEmitter<Video>();
    this.listVideosEmitter = new EventEmitter<Video[]>()
  }

  ngOnInit(): void {
    this.videos = this.nameVideoService.videoList;
  }

  drop(event: CdkDragDrop<Video[]>) {
    moveItemInArray(this.videos, event.previousIndex, event.currentIndex);
    this.listVideosEmitter.emit(this.videos);
  }

  playVideo(video: Video){
    this.video = video;
      this.videoEmitter.emit(this.video);
      this.listVideosEmitter.emit(this.videos);
  }

}
