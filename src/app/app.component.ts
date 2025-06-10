import { Component, OnInit } from '@angular/core';
import { JobService } from './job-list-item/job.service';
import { Job } from './job-list-item/job';
import { CommonModule } from '@angular/common';
import { JobListItemComponent } from "./job-list-item/job-list-item.component";
import { TagChipButtonComponent } from "./tag-chip-button/tag-chip-button.component";
import { Level } from './tag-chip-button/level';
import { Role } from './tag-chip-button/role';
import { Languages } from './tag-chip-button/languages';
import { Tools } from './tag-chip-button/tools';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, JobListItemComponent, JobListItemComponent, TagChipButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'job-listings';

  Role = Role;
  Level = Level;
  Languages = Languages;
  Tools = Tools;

  public jobList: Job[] = [];
  constructor( 
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.jobService.getJobs()
      .forEach( it => this.jobList = it );
  }
}
