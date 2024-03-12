import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';
import { TabsModule } from 'smart-webcomponents-angular/tabs';

import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { TabsChartsComponent } from './tabs-charts/tabs-charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BtccustomerComponent } from './btccustomer/btccustomer.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'users', component: UsersComponent },
  { path: 'btccustomer', component: BtccustomerComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

window.Smart.License = "28771AA0-A9DF-43A2-9B8C-054EDFA6F179";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    TabsChartsComponent,
    DashboardComponent,
    TasksComponent,
    UsersComponent,
    BtccustomerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    ChartModule,
    GridModule,
    ListBoxModule,
    ProgressBarModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
