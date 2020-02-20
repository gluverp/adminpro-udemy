import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
}) 
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  ngOnInit(): void {
  }

  onChanges( newValue: number) {

    // let elemtHTML: any = document.getElementsByName('progreso')[0];
    console.log(newValue);
    if( newValue>= 100){
      this.progreso=100
    }else if(newValue <=0){
      this.progreso=0
    }else{
      this.progreso = newValue;
    }
    // elemtHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );
  }

  cambiarValor( valor ) {
    if(this.progreso <0){
      this.progreso = 0
    }
    if(this.progreso >100){
      this.progreso = 100
    }
    if ((valor == -5 && this.progreso >= 5) || (valor == +5 && this.progreso < 100)){ 
    this.progreso += valor;
    }

    this.cambioValor.emit( this.progreso );
  }

}
