import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CollaboratorsModule } from './features/collaborators/collaborators.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CollaboratorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
