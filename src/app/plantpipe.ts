import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'myPlant'
})
export class Plantpipe implements PipeTransform {
    transform(value: any) {
        let about:string = value+'';

        let formattedabout:string = '';

        formattedabout = about.slice(0,5)+'...';
                                   
                                          
        console.log('pipe method '+formattedabout);
        return formattedabout;

    }
}
