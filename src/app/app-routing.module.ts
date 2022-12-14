import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './employes/employes.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { RechercheParSocieteComponent } from './recherche-par-societe/recherche-par-societe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeSocietesComponent } from './liste-societes/liste-societes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeGuard } from './employe.guard';

const routes : Routes = [
  { path: "employes", component : EmployesComponent},
  { path: "add-employe", component : AddEmployeComponent, canActivate:[EmployeGuard]},
  { path: "", redirectTo: "employes", pathMatch: "full"},
  {path: "rechercheParSociete", component : RechercheParSocieteComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  { path: "updateEmploye/:id", component : UpdateEmployeComponent},
  { path:"listeSocietes" , component : ListeSocietesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
