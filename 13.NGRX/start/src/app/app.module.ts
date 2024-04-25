import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { counterReucer } from './store/counter.reducer';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effect';


@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({counter : counterReucer}) , 
    AsyncPipe, 
    EffectsModule.forRoot([CounterEffects])
  ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
