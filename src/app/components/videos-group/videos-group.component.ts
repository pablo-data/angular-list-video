import { Component, Input, OnInit } from '@angular/core';

import { SearchService } from './../../core/services/searchs/search.service';

import {Video} from './../../core/models/video.model';

import {NameVideoService} from './../../core/services/name-video/name-video.service';

@Component({
  selector: 'app-videos-group',
  templateUrl: './videos-group.component.html',
  styleUrls: ['./videos-group.component.scss']
})
export class VideosGroupComponent implements OnInit {

  @Input() public videoName : string = "hola";
  public videos: any;
  public infoVideo: Video = {
    title: '',
    description: '',
    videoId: ''
  }

  public videoList: Video[] = this.nameVideoService.videoList;
  

  constructor(
    private searchService: SearchService,
    private nameVideoService: NameVideoService,
    ) { 
      
    }

  ngOnInit(): void {
  //  this.showVideos();
  }

  ngOnChanges(){
    this.showVideos();
  }

  showVideos(){
    if(this.videoName != ''){
      this.searchService.getVideos(this.videoName)
    .subscribe((video) => {
      this.videos = video.items;

     // console.log(video.items);
      for (let i of video.items) {
     //   console.log(i.snippet.title);
      } 

    });
    }
    
  }

  addVideo(video: any){

    this.videoList.push({title: video.snippet.title, description: video.snippet.description, videoId: video.id.videoId});

    this.nameVideoService.enviarVideo(this.videoList);
  }


}
