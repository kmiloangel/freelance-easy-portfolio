import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPortfolio() {
    return this.http.get(environment.api_url).pipe(map((res: any) => {
      return res.data;
    }));
  }
}
