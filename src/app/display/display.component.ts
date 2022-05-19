import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeathapiService } from '../weathapi.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData : any;

  constructor(
    private formBuilder: FormBuilder,
    private weathapiService : WeathapiService
    ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToWeathAPI(formValues: any) {

      this.weathapiService.getWeather(formValues.location).subscribe
      (data => {this.weatherData = data;}, err => alert("Location not found!!"))
    
    
    
  }

}
