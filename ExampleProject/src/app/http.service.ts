import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  param: string = "vazia"
  constructor(private http: HttpClient) { }

  private httpCall(url: string) {
    this.http.get(url)
  }
  get(url: string) {
    if (url.includes('.com') || !url.includes('SELECT') || !url.includes('DELETE'))
      return this.httpCall(url)
    else
      return false
  }
  post() { }
}
