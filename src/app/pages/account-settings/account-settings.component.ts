import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {
    console.log(tema);
    this._ajustes.aplicarTema( tema );
    this.colocarCheck();
  }

  colocarCheck() {
    let selectores: any  = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for ( let ref of selectores) {
      ref.classList.remove('working');
      if (ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        
      }
    }
  }
}
