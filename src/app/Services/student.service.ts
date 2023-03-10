import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/1083710958320500736');
  }

  getWeatherData():Observable<any>{
    return this.http.get(' http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=dbedfc40453e44ac931171b10b685c59');
  }
}

