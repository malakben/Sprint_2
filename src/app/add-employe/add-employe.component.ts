import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.models';
import { EmployeService } from '../service/employe.service';
import { Societe } from '../model/societe.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: []
})
export class AddEmployeComponent implements OnInit {
  message: string | undefined;
  newEmploye = new employe();
  newIdSociete!: number;
  newSociete!: Societe;
  societes!: Societe[];

  constructor(private employeService: EmployeService,
    private router: Router) { }

  ngOnInit(): void {

    this.employeService.listeSocietes().
      subscribe(emps => {
        this.societes = emps;
        console.log(emps);
      });

  }
  addEmploye() {
    this.newEmploye.societe = this.societes.find(soc => soc.idSociete == this.newIdSociete)!;
    this.employeService.ajouterEmployes(this.newEmploye)
      .subscribe(emp => {
        console.log(emp);
        this.router.navigate(['employes']);
      });
  }
}
