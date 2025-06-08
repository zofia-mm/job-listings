import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobService } from './job-list-item/job.service';
import { Job } from './job-list-item/job';
import { CommonModule } from '@angular/common';
import { JobListItemComponent } from "./job-list-item/job-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, JobListItemComponent, JobListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'job-listings';
  public jobList: Job[] = [];
  constructor( 
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.jobService.getJobs()
      .forEach( it => this.jobList = it );
  }
}
