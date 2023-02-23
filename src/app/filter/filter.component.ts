import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from '../plant';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  __plantService:PlantoperationService; // creating object of Service layer
  router:Router;

  
  allPlants : Array<Plant> = [];
  watchList : Array<Plant> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(plantService:PlantoperationService,router:Router)
  {
    this.__plantService = plantService;
    this.allPlants = this.__plantService.getPlantArr();
    this.router = router;
    console.log(this.allPlants.length);
  }
  viewPlantDetails(pid:string)
  {
    
    this.router.navigate(['plantDetail',pid]);
  }



  goForBuy(plant:string)
  {
    let plantId = parseInt(plant);
    console.log(" code to buy "+plantId+" plant");
    
  }

  addWatchlist(plant:string)
  {
    let addPlantId = parseInt(plant);
    
    this.allPlants.forEach(p=>{
      if(p.plantId == addPlantId)
      {
        this.watchList.push(p);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allPlants = this.__plantService.getPlantsByTypeOfPlant(filterValue);
  }
  getFilterData1(filterValue:string)
  {
    console.log(" Filter Value Season"+filterValue);

    this.allPlants = this.__plantService.getPlantsByBloomSeason(filterValue);
  }
  getFilterData2(filterValue:string)
  {
  
    console.log(" Filter Value "+filterValue);

    this.allPlants = this.__plantService.getPlantsByStarRating(parseInt(filterValue));
  }

}





