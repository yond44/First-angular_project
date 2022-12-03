import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private HttpClient : HttpClient) { }
  
    getAlbumList() {
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts')
    };
}
