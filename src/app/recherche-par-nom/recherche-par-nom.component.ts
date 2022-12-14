import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.models';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: []
})
export class RechercheParNomComponent  implements OnInit{

  nomEmploye!: string;
  employes!: employe[];
  allEmploye!: employe[];           
  constructor(private employeService: EmployeService){}
  ngOnInit(): void {
    this.employeService.listeEmploye().
    subscribe(emps => {
    this.allEmploye = emps;
  });
  }
  rechercherEmp(){
    this.employeService.rechercherParNom(this.nomEmploye).
subscribe(emps => {
this.employes = emps;
console.log(emps)});

  }
  onKeyUp(filterText : string){
    this.employes = this.allEmploye.filter(item =>
    item.nom.toLowerCase().includes(filterText));
    }
  }    
