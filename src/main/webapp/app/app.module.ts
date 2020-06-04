import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PilotoEcoPlanSharedModule } from 'app/shared/shared.module';
import { PilotoEcoPlanCoreModule } from 'app/core/core.module';
import { PilotoEcoPlanAppRoutingModule } from './app-routing.module';
import { PilotoEcoPlanHomeModule } from './home/home.module';
import { PilotoEcoPlanEntityModule } from './entities/entity.module';
import { EcoplanVistaProyectosModule } from './vista-proyectos/vista-proyectos.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PilotoEcoPlanSharedModule,
    PilotoEcoPlanCoreModule,
    PilotoEcoPlanHomeModule,
    EcoplanVistaProyectosModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PilotoEcoPlanEntityModule,
    PilotoEcoPlanAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class PilotoEcoPlanAppModule {}
