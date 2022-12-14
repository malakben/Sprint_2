import { Component, OnInit } from '@angular/core';
import { Societe } from '../model/societe.models';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-liste-societes',
  templateUrl: './liste-societes.component.html',
  styleUrls: []
})
export class ListeSocietesComponent implements OnInit {
  updateSociete: Societe={'idSociete':0,'nomS':'','description':''};
  societes!: Societe[];
  ajout:boolean=true;

  constructor(private employeService :EmployeService){}
  ngOnInit(): void {
    this.employeService.listeSocietes().
    subscribe(soc => {this.societes = soc;
      console.log(soc);
      
  });
}
chargerSociete(){
  this.employeService.listeSocietes().
  subscribe(soc => {this.societes = soc;
  console.log(soc);
  });
  }
societeisUpdated(soc:Societe){
  console.log("Societe updated event",soc);
  this.employeService.ajouterCategorie(soc).
   subscribe( ()=> this.chargerSociete());
}
updateSoc(soc:Societe) {
  this.updateSociete=soc;
  this.ajout=false;
  }
}
