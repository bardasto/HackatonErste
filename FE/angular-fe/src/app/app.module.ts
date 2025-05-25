import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import {FormsModule} from '@angular/forms';
import {ChipsModule} from 'primeng/chips';
import {TableModule} from 'primeng/table';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MoneyPipe } from './components/money.pipe';
import {DockModule} from 'primeng/dock';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {ChartModule} from 'primeng/chart';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ReccomendModelComponent } from './components/reccomend-model/reccomend-model.component';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ProgressBarComponent,
    MoneyPipe,
    UserProfileComponent,
    LoginFormComponent,
    ReccomendModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChipsModule,
    TableModule,
    DockModule,
    MatDialogContent,
    MatDialogTitle,
    ChartModule,
    HttpClientModule,
    ImageModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
