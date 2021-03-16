import { Component, OnInit } from '@angular/core';
import {Video} from './../../core/models/video.model';

@Component({
  selector: 'app-lists-video-screen',
  templateUrl: './lists-video-screen.component.html',
  styleUrls: ['./lists-video-screen.component.scss']
})
export class ListsVideoScreenComponent implements OnInit {

  public videoObject: Video = {
    title: '',
    description: '',
    videoId:  ''
  };

  public videoList: Video[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public sendVideo(video: Video){
    this.videoObject = video;
  }

  public sendList(videos: Video[]){
    this.videoList = videos;
  }
}
