import { Component, OnInit } from '@angular/core';
import { CallApiServiceService } from 'src/app/services/call-api-service.service';
import { CallApiResponseObject } from 'src/app/common/call-api-response-object';

@Component({
  selector: 'app-call-rest-api',
  templateUrl: './call-rest-api.component.html',
  styleUrls: ['./call-rest-api.component.css']
})
export class CallRestApiComponent implements OnInit {

  callApiResponseObject: CallApiResponseObject[];
  constructor(private CallApiService: CallApiServiceService) { }

  ngOnInit() {
    this.getApiResponseObjects();
  }

  getApiResponseObjects(){
    this.CallApiService.getApiResponse().subscribe(
      data => {
        this.callApiResponseObject = data;
      }
    )
  }

}
