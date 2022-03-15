import { Component } from '@angular/core';
import { Collaborator } from './features/collaborators/models/collaborator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collaborator: Collaborator = {
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev Pl'
  };
  title = 'Gestão de Colaboradores';
}
