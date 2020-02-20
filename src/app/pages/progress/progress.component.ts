import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  
  progreso1: number = 10;
  progreso2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  

}
