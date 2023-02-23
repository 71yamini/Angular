import { Injectable } from '@angular/core';

import { Plant } from './plant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantdto } from './plantdto';

@Injectable({
  providedIn: 'root'
})
export class PlantoperationService {
  baseURL:string = 'http://localhost:6001/plant';
  allPlantEndPoint:string=this.baseURL+'/showplants';


  plantArr:Plant[] = [];

  constructor(private http:HttpClient){
 console.log("Inside Constructor "+this.allPlantEndPoint);
 
  }
  getAllPlantsFromSpring():Observable<Plant[]>
  {
    console.log("inside service : "+this.allPlantEndPoint);
    return this.http.get<Plant[]>(`${this.allPlantEndPoint}`);
  }
  addPlant(plantFromUser:Plant){
    this.plantArr.push(plantFromUser);
    console.log("Inside Plant Service : Plant Added "+plantFromUser.plantId);
    console.log(" Total Plant Are :- "+this.plantArr.length);
  }
    
  
  getPlantByNumber(searchPlantId:number):Plant
  {
    let outputPlant:Plant = new Plant(0,'',0,'','','',0,0,0,'');
    for(let i=0;i<this.plantArr.length;i++)
    {
      let thisPlant:Plant = this.plantArr[i];
        if(thisPlant.plantId == searchPlantId)
        {
          outputPlant = thisPlant;
          break;
        }
    }
    
    return outputPlant;
  }

  getPlantArr():Plant[]
  {
    return this.plantArr;
  }

  getPlantsByTypeOfPlant(filterTypeOfPlant:string):Plant[]
  {
    // localhost:8080/api/planter/{category}
   let outputArr:Plant[] = [];

    this.plantArr.forEach(p=>{
      if(p.typeOfPlant == filterTypeOfPlant)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantsByStarRating(filterStarRating:number):Plant[]
  {
    // localhost:8080/api/planter/{rating}
   let outputArr:Plant[] = [];

    this.plantArr.forEach(p=>{
      if(p.starRating == filterStarRating)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantsByBloomSeason(filterBloomSeason:string):Plant[]
  {
    console.log("bloomSeason inside service "+ filterBloomSeason);
    // localhost:8080/api/plant/{bloom}
   let outputArr:Plant[] = [];

    this.plantArr.forEach(p=>{
      if(p.bloomSeason == filterBloomSeason)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
}


