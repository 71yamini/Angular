/*import { Component } from '@angular/core';
import { Plant } from '../plant';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-tdfplant-page',
  templateUrl: './tdfplant-page.component.html',
  styleUrls: ['./tdfplant-page.component.css']
})
export class TdfplantPageComponent {
  __plantService:PlantoperationService; // creating object of Service layer
    
  p:Plant = new Plant(0,'',0,'','','',0,0,'','');
    constructor(plantService:PlantoperationService)
  {
    this.__plantService = plantService;
    console.log(this.p);
    

  }
  ngOnInit(){
    
  }
  doFormSubmit(){
    this.__plantService.addPlant(this.p);
    console.log(this.p);
    
  }
}*/
