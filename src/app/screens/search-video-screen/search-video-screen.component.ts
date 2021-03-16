import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Video } from './../../core/models/video.model';

@Component({
  selector: 'app-search-video-screen',
  templateUrl: './search-video-screen.component.html',
  styleUrls: ['./search-video-screen.component.scss']
})
export class SearchVideoScreenComponent implements OnInit {

  public videoForm = new FormGroup({
    videoName: new FormControl ('')
  });

  public videoName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public getForm(form: FormGroup){
    this.videoForm = form;
  }

  public sendName(name: string){
    this.videoName = name;
  }

}
