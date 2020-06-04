import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'tipo-proyecto',
        loadChildren: () => import('./tipo-proyecto/tipo-proyecto.module').then(m => m.PilotoEcoPlanTipoProyectoModule),
      },
      {
        path: 'tipo-actividad',
        loadChildren: () => import('./tipo-actividad/tipo-actividad.module').then(m => m.PilotoEcoPlanTipoActividadModule),
      },
      {
        path: 'estado',
        loadChildren: () => import('./estado/estado.module').then(m => m.PilotoEcoPlanEstadoModule),
      },
      {
        path: 'empresa',
        loadChildren: () => import('./empresa/empresa.module').then(m => m.PilotoEcoPlanEmpresaModule),
      },
      {
        path: 'proyecto',
        loadChildren: () => import('./proyecto/proyecto.module').then(m => m.PilotoEcoPlanProyectoModule),
      },
      {
        path: 'actividad',
        loadChildren: () => import('./actividad/actividad.module').then(m => m.PilotoEcoPlanActividadModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class PilotoEcoPlanEntityModule {}
