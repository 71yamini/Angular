export class Plant {



    plantId:number;
    plantName:string;
    height:number;
    typeOfPlant:string;
    bloomSeason:string;
    about:string;
    starRating:number;
    discount:number;
    price:number;
    imageName:string
    
    constructor(
        plantId:number,
        plantName:string,
        height:number,
        typeOfPlant:string,
        bloomSeason:string,
        about:string,
        starRating:number,
        discount:number,
        price:number,
        imageName:string

    )
    {
          this.plantId = plantId;
          this.plantName = plantName;
          this.height = height;
          this.typeOfPlant = typeOfPlant;
          this.bloomSeason = bloomSeason;
          this.about = about;
          this.starRating=starRating;
          this.discount=discount;
          this.price=price;
          this.imageName=imageName
    }
}
