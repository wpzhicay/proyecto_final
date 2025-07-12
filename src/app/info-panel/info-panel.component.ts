import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent {
  title = 'AQUI ESTA EL FUTURO DE LA ENERGIA ';
  data = [
    { label: 'Generadores activos', value: 5 },
    { label: 'Energía total (kWh)', value: 1623 },
    { label: 'Usuarios conectados', value: 12 }
  ];
}
