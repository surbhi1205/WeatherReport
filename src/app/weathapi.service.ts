import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeathapiService {

  constructor(private http: HttpClient) { }
  getWeather(location: string){
    
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=56bc0b3e870b9ed84af419af9e60d24f'
    );
  }

}
