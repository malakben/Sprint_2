import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employe } from '../model/employe.models';
import { Societe } from '../model/societe.models';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-recherche-par-societe',
  templateUrl: './recherche-par-societe.component.html',
  styleUrls: []
})
export class RechercheParSocieteComponent implements OnInit{
  IdSocieteEmp!:number;
 societes!:Societe[];
 employes!:employe[];
 searchTerm!: string;
  constructor(private employeService :EmployeService){}
  ngOnInit(): void {
    this.employeService.listeSocietes().subscribe
    (socs => 
    {this.societes = socs;
    console.log(socs);
    });

  }
  onChange() {
    this.employeService.rechercherParSociete(this.IdSocieteEmp).
    subscribe(emps =>{this.employes=emps});

    }
}
