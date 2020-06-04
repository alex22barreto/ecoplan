import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { PilotoEcoPlanSharedModule } from 'app/shared/shared.module';
import { TargetaProyectosComponent } from './targeta-proyectos.component';
import { targetaProyectosRoute } from './targeta-proyectos.route';

@NgModule({
  imports: [PilotoEcoPlanSharedModule, RouterModule.forChild(targetaProyectosRoute)],
  declarations: [TargetaProyectosComponent],
})
export class EcoplanTargetaProyectosModule {}
