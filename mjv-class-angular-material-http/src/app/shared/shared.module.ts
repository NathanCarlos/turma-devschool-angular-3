import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { RedDirective } from './directives/red.directive';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const materialModules = [
  MatButtonModule,
  MatDividerModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatProgressBarModule
];

const components = [
  HeaderComponent,
  FooterComponent
];

const pipes = [CpfPipe];

const directives = [RedDirective];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...pipes,
    ...directives,
    ...materialModules
  ]
})
export class SharedModule { }
