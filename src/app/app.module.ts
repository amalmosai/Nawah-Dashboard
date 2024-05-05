import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { EditeProdComponent } from './edite-prod/edite-prod.component'
import { AddProdComponent } from './add-prod/add-prod.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FarmarComponent } from './farmar/farmar.component';
import { EditFarmarComponent } from './edit-farmar/edit-farmar.component';
import { AddFarmarComponent } from './add-farmar/add-farmar.component';
import { EngineersComponent } from './engineers/engineers.component';
import { EditEngineerComponent } from './edit-engineer/edit-engineer.component';
import { AddEngineerComponent } from './add-engineer/add-engineer.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule , MatPaginator} from '@angular/material/paginator';
import { TestComponent } from './test/test.component';
import { ChartComponent } from './chart/chart.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { AddFarmerToEngineerComponent } from './add-farmer-to-engineer/add-farmer-to-engineer.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MessageComponent } from './message/message.component';
@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ProductsComponent,
        EditeProdComponent,
        AddProdComponent,
        UserComponent,
        AddUserComponent,
        EditUserComponent,
        FarmarComponent,
        EditFarmarComponent,
        AddFarmarComponent,
        EngineersComponent,
        EditEngineerComponent,
        AddEngineerComponent,
        TestComponent,
        ChartComponent,
        MainComponent,
        LoginComponent,
        AdminComponent,
        AddFarmerToEngineerComponent,
        BarChartComponent,
        PieChartComponent,
        MessageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        NgxPaginationModule,
        IonicModule
    ]
})
export class AppModule { }
