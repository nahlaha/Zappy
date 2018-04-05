import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
@Injectable()
export class TweetsService {
private serverUrl='http://localhost:8080/tweets';
  constructor(private http:HttpClient) {}
  getTweets():Observable<tweets[]>{
      return  this.http.get<tweets[]>(this.serverUrl);
    }  
}
export interface tweets {
  tweet: string;
  date: string;
}
