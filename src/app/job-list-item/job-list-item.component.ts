import { Component, Input } from '@angular/core';
import { Job } from './job';

@Component({
  selector: 'app-job-list-item',
  standalone: true,
  imports: [],
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.scss'
})
export class JobListItemComponent{
  @Input({ required: true }) job!: Job;
}
