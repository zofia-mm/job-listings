import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  private jobListUrl = "/assets/data.json";

  constructor(
    private httpClient: HttpClient
  ) { }

  getJobs(): Observable<Job[]>  {
    return this.httpClient.get<Job[]>( this.jobListUrl )
  }
}
