import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { employe } from '../model/employe.models';
import { Societe } from '../model/societe.models';
import { AuthService } from '../service/auth.service';
import { EmployeService } from '../service/employe.service';


@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: []
})
export class EmployesComponent implements OnInit {
  employes: employe[] = [];
  public formValue!: FormGroup;
  societe! : Societe[];

  constructor(private employeService: EmployeService,
    public authService: AuthService) { }
  ngOnInit(): void {
    this.listeEmploye();

  }
  listeEmploye() {
    this.employeService.listeEmploye().subscribe(
      (emps: employe[]) => {
        this.employes = emps;
        console.log(emps);
      })
  }
  supprimerEmploye(emp: employe)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.employeService.supprimerEmploye(emp.idEmp).subscribe(() => {
  console.log("produit supprimé");
  this.listeEmploye();
  });
  } 
}
