import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Video } from './../../models/video.model';




@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getVideos(video: string){
    return this.httpClient.get<any>(`${environment.base_url}/search?part=snippet&maxResults=25&q=${video}&key=%20${environment.api_key}`);
  }


}
