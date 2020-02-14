import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallApiResponseObject } from '../common/call-api-response-object';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallApiServiceService {

  private baseurl = "https://jsonplaceholder.typicode.com/todos/";

  constructor(private httpClient: HttpClient) { }

  getApiResponse(): Observable<CallApiResponseObject[]>{
    return this.httpClient.get<any>(this.baseurl).pipe(
        
    );
  }
}

interface GetResponse{
  Object:CallApiResponseObject[];
}
