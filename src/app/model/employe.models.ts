import { Societe } from "./societe.models";

export class employe{
    idEmp !: number;
    nom !: string;
    prenom : string='';
    cin : string='';
    service : string='';
    dateNaiss?: Date;
societe: any;
   // societe?: Societe;
}