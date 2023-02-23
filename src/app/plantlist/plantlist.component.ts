import { Component } from '@angular/core';
import { Plant } from '../plant';
import { Plantdto } from '../plantdto';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.css']
})
export class PlantlistComponent {
  
  allPlants:Plant[] = [];
  constructor(private plantService:PlantoperationService)
  {
    plantService. getAllPlantsFromSpring().subscribe(
      data=>{
        this.allPlants = data;
      },
      err=>{
        console.log("Error" +err);
        
      }
    );

}
}
