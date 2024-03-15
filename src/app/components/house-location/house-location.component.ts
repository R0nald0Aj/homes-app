import { Component, Input } from '@angular/core';
import { HousingLocation } from 'src/app/model/housing-location';

@Component({
  selector: 'app-house-location',
  templateUrl: './house-location.component.html',
  styleUrls: ['./house-location.component.css']
})
export class HouseLocationComponent {

   @Input()
    housingLocation!:HousingLocation;

}
