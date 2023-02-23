import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../plant';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {
  __plantService:PlantoperationService; // creating object of Service layer
    router:Router;
    activeRoute:ActivatedRoute;
    p:Plant = new Plant(0,'',0,'','','',0,0,0,'');
      constructor(plantService:PlantoperationService,router:Router,activeRoute:ActivatedRoute)
    {
      this.__plantService = plantService;
      this.router = router;
      this.activeRoute = activeRoute;
  
      let searchPlantId= this.activeRoute.snapshot.params['pid']; // extract value from prameter(URI)
      console.log(searchPlantId);
      this.p = this.__plantService.getPlantByNumber(parseInt(searchPlantId)); // get data from service class
      console.log(this.p);
    }
  

}



