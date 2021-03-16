import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() formEmitter: EventEmitter<FormGroup>;
  @Output() nameEmitter: EventEmitter<string>;

  public videoForm = new FormGroup({
    videoName: new FormControl ('')
  });

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.formEmitter = new EventEmitter<FormGroup>();
      this.nameEmitter = new EventEmitter<string>();
     }

   name : string = "";  
   value: string = '';

  ngOnInit(): void {
    this.buildForm();
    
  }

  public buildForm(){
    this.videoForm = this.formBuilder.group({
      videoName: ['', [Validators.required]] 
    });
    this.formEmitter.emit(this.videoForm);
  }

  

  public enterElement(video: FormGroup){
    if(video.valid){
      this.name = video.get('videoName')!.value;
      this.nameEmitter.emit(this.name);
    }
  }
}

