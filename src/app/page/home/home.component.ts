import { from } from 'rxjs';
import { Component,EventEmitter,OnInit,inject} from '@angular/core';
import { HousingLocation } from 'src/app/model/housing-location';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  housingLocationList : HousingLocation[] = []



 constructor(private housingService : HousingService){
  this.housingLocationList = this.housingService.findAllHousing();
 }
  ngOnInit(): void {
   
  }


}
