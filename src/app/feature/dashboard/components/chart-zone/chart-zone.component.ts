import { Component } from '@angular/core';
import { ChartCardComponent } from '../chart-card/chart-card.component';
import { Chart } from '../../models/chart-model';
import { ChartManager } from '../../../../shared/managers/chart.manager';

@Component({
  selector: 'app-chart-zone',
  standalone: true,
  imports: [ChartCardComponent],
  templateUrl: './chart-zone.component.html',
  styleUrl: './chart-zone.component.scss',
})
export class ChartZoneComponent {
  charts: Chart[] = ChartManager.charts;
}
