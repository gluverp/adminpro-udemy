import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() leyenda: string = 'Leyenda';
  @Input() gdata: any;
  @Input() glabels: any;
  @Input() gtchar: any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
