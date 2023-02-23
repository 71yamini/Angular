import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { FlowerplantComponent } from './flowerplant/flowerplant.component';
import { FruitplantComponent } from './fruitplant/fruitplant.component';
import { UpcomingplantsComponent } from './upcomingplants/upcomingplants.component';
//import { TdfplantPageComponent } from './tdfplant-page/tdfplant-page.component';
import { LoginComponent } from './login/login.component';
import { FilterComponent } from './filter/filter.component';
import { PlantlistComponent } from './plantlist/plantlist.component';






const allLinks:Routes = [
  {path:'launchnewplant',component:AdminComponent},
  {path:'viewallplants',component:UserComponent},
  {path:'flowerplant',component:FlowerplantComponent},
  {path:'fruitplant',component:FruitplantComponent},
  {path:'upcomingplants',component:UpcomingplantsComponent},
  {path:'filters',component:FilterComponent},
  {path:'allPlants',component:PlantlistComponent}
]



@NgModule({
  declarations: [
       AppComponent,
       UserComponent,
       AdminComponent,
       PlantDetailsComponent,
       FlowerplantComponent,
       FruitplantComponent,
       UpcomingplantsComponent,
      // TdfplantPageComponent,
       LoginComponent,
      FilterComponent,
      PlantlistComponent
       
       
      
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
