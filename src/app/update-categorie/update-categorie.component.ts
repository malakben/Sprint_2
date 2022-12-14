import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Societe } from '../model/societe.models';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: []
})
export class UpdateCategorieComponent implements OnInit {
  @Input()
  societe!: Societe;
  @Output()
  societeUpdated = new EventEmitter<Societe>();
  @Input()
  ajout!:boolean;
  constructor(){}
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateSociete ",this.societe);
  }

  saveSociete(){
    this.societeUpdated.emit(this.societe);
  }
  
}
