import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Video} from './../../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class NameVideoService {

  public videoList: Video[] = [];

  private enviarNameSubject = new Subject<Video[]>();
  enviarNameObservable = this.enviarNameSubject.asObservable();

  constructor() { }

  enviarVideo(videoList: Video[]){
    this.videoList = videoList;
    this.enviarNameSubject.next(this.videoList);
  }
}
