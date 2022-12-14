import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employe } from '../model/employe.models';
import { Societe } from '../model/societe.models';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: []
})
export class UpdateEmployeComponent implements OnInit {
  currentEmploye = new employe();
  societes! : Societe[];
  updatedSocId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeService: EmployeService) { }

  ngOnInit(): void {
   //remplir societes
       this.employeService.listeSocietes().
       subscribe(soc => {this.societes = soc;
        console.log(soc);
       });

       this.employeService.consulterEmploye(this.activatedRoute.snapshot.params['id']).
       subscribe( emps =>{ this.currentEmploye = emps;
       this.updatedSocId =this.currentEmploye.societe.idSociete;
       });
      }
  
  updateEmploye() {
    this.currentEmploye.societe= this.societes.
    find(soc => soc.idSociete == this.updatedSocId)!;
    this.employeService.updateEmploye(this.currentEmploye).
    subscribe(emp => {
    this.router.navigate(['employes']);
    });
  }

}
