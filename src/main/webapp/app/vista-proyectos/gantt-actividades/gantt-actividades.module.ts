import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BeautifulChartsModule } from 'ngx-beautiful-charts';

import { RouterModule } from '@angular/router';

import { PilotoEcoPlanSharedModule } from 'app/shared/shared.module';
import { GanttActividadesComponent } from './gantt-actividades.component';
import { GanttActividadesRoute } from './gantt-actividades.route';

@NgModule({
  imports: [CommonModule, PilotoEcoPlanSharedModule, RouterModule.forChild(GanttActividadesRoute), FormsModule, BeautifulChartsModule],
  declarations: [GanttActividadesComponent],
})
export class EcoplanGanttActividadesModule {}
