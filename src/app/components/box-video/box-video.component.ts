import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/core/models/video.model';

@Component({
  selector: 'app-box-video',
  templateUrl: './box-video.component.html',
  styleUrls: ['./box-video.component.scss']
})
export class BoxVideoComponent implements OnInit {

  @Input() public videoObject: Video = {
    title: '',
    description: '',
    videoId:  ''
  };

  @Input() public videoList: Video[] = [];

  public badUrl: string = "https://www.youtube.com/embed/w39YOGpW1pQ";
  public videoUrl: any;

  public url : any = "w39YOGpW1pQ";

  public index : number = 0;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(){
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    console.log(this.videoObject);
  }
  
  ngOnChanges(){
   // this.badUrl = `https://www.youtube.com/embed/${this.videoObject.videoId}`;
   // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.badUrl);

    this.url = this.videoObject.videoId;
  }
  
  OnStateChangeEvent(event: any) {
    console.log('player state', event.data);

    if(event.data == 0){
    this.index = this.videoList.lastIndexOf(this.videoObject);

    if(this.index + 1 < this.videoList.length){
      this.videoObject = this.videoList[this.index + 1];
      this.url = this.videoObject.videoId;
  
    }

      /*
      this.url = this.videoList[0].videoId;
      this.videoObject.title = this.videoList[0].title;
      this.videoObject.description = this.videoList[0].description;
      */
    }

    if(event.data == -1){
      event.target.playVideo();
    }
  }

  PlayerEvent(event: any){
    event.target.playVideo();
  }
  

  
}
