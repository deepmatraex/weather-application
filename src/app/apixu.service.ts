import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http : HttpClient) {}
   getWeather(location){
    return this.http.get(
     'http://api.weatherstack.com/current?access_key=d5e27cb698cee291ba70471febe49b76&query=New%20York' +location);
    }
}