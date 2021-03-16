import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.scss']
})
export class ButtonSearchComponent implements OnInit {

  @Output() nameEmitter: EventEmitter<string>;

  name: string = "";

  @Input() public videoForm = new FormGroup({
    videoName: new FormControl ('')
  });

  constructor() { 
    this.nameEmitter = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  public Button(){
    if(this.videoForm.valid){
      this.name = this.videoForm.get('videoName')!.value;
      this.nameEmitter.emit(this.name);
    }
  }

}
