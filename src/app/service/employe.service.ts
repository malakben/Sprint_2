import { Injectable } from '@angular/core';
import { Societe } from '../model/societe.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employe } from '../model/employe.models';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  societes!: Societe[];
  employes!: employe[];
  employe!: employe;
  constructor(private http: HttpClient) { }

  listeEmploye(): Observable<employe[]> {
    return this.http.get<employe[]>('http://localhost:8081/employes/api/all');
  }

  ajouterEmployes(emp: employe): Observable<employe> {
    return this.http.post<employe>('http://localhost:8081/employes/api', emp, httpOptions);
  }

  supprimerEmploye(id: number) {
    const url = `${'http://localhost:8081/employes/api'}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterEmploye(id: number): Observable<employe> {
    const url = `${'http://localhost:8081/employes/api'}/${id}`;
    return this.http.get<employe>(url);
  }
  trierEmploye() {
    this.employes = this.employes.sort((n1, n2) => {
      if (n1.idEmp! > n2.idEmp!) {
        return 1;
      }
      if (n1.idEmp! < n2.idEmp!) {
        return -1;
      }
      return 0;
    });
  }

  updateEmploye(emp: employe): Observable<employe> {
    return this.http.put<employe>('http://localhost:8081/employes/api', emp, httpOptions);
  }

  //conserne la societe
  listeSocietes(): Observable<Societe[]> {
    return this.http.get<Societe[]>('http://localhost:8081/employes/api' + "/soc");
  }
  consulterSocietes(id: number): Societe {
    return this.societes.find(soc => soc.idSociete == id)!;
  }
  rechercherParSociete(idSociete: number): Observable<employe[]> {
    const url = `${'http://localhost:8081/employes/api'}/empsoc/${idSociete}`;
    return this.http.get<employe[]>(url);
  }
  rechercherParNom(nom: string): Observable<employe[]> {
    const url = `${'http://localhost:8081/employes/api'}/empbyname/${nom}`;
    return this.http.get<employe[]>(url);
  }
  ajouterCategorie(soc: Societe): Observable<Societe> {
    return this.http.post<Societe>('http://localhost:8081/employes/soc', soc, httpOptions);
  }

}
