import { Component } from '@angular/core';
import { Plant } from '../plant';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  __plantService:PlantoperationService;
  p:Plant = new Plant(0,'',0,'','','',0,0,0,'');

  constructor(plantService:PlantoperationService)
  {
    this.__plantService=plantService;
  }
  doFormSubmit() {
    console.log("Form Submit button clicked")
    console.log(this.p);
    
    
  }

  readPlant(plantId:string,plantName:string,height:string,typeOfPlant:string,bloomSeason:string,price:string,discount:string,imageName:string,about:string,starRating:string)
  {
    console.log(plantId+" "+plantName+" "+height+" "+typeOfPlant+" "+bloomSeason+" "+price+" "+discount+" "+imageName+" "+about+" "+starRating);
    let plantFromUser:Plant = new Plant(parseInt(plantId),plantName,parseInt(height),typeOfPlant,bloomSeason,about,parseInt(starRating),parseInt(discount),parseInt(price),imageName);
    this.__plantService.addPlant(plantFromUser)
    
  }

}





