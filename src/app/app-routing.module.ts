import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEngineerComponent } from './add-engineer/add-engineer.component';
import { AddFarmarComponent } from './add-farmar/add-farmar.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditEngineerComponent } from './edit-engineer/edit-engineer.component';
import { EditFarmarComponent } from './edit-farmar/edit-farmar.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditeProdComponent } from './edite-prod/edite-prod.component';
import { EngineersComponent } from './engineers/engineers.component';
import { FarmarComponent } from './farmar/farmar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './Serviecs/Guard/auth.guard';
import { AddFarmerToEngineerComponent } from './add-farmer-to-engineer/add-farmer-to-engineer.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'edite-prod/:id', component: EditeProdComponent },
      { path: 'addprod', component: AddProdComponent },
      { path: 'users', component: UserComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
      { path: 'farmar', component: FarmarComponent },
      { path: 'message', component: MessageComponent },
      { path: 'edit-farmar/:id', component: EditFarmarComponent },
      { path: 'addfarmar', component: AddFarmarComponent },
      { path: 'engineer', component: EngineersComponent },
      { path: 'addeng', component: AddEngineerComponent },
      { path: 'edit-eng/:id', component: EditEngineerComponent },
      { path: 'add-farmer-to-engineer/:id', component: AddFarmerToEngineerComponent},
      { path: 'zzz', component: TestComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
