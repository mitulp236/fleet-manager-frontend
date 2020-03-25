import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/_service/driver.service';
import { Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriverModel } from 'src/app/_model/driver-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-drivers',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private driverService: DriverService,
              private router: Router,
              private http: HttpClient,
              private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    
  }

  
  drivers : DriverModel[];

  //get all driver
  getDrivers(){
    this.driverService.getDrivers()
        .subscribe(res =>{
          console.log("success !");
          console.log(res);
          this.drivers = res.body;
          console.log(res.body.forEach(value => console.log(value)));
        },err =>{
          console.log("error !");
          console.log(err);
        });
        
  }

  //save driver
  saveDriver(driverPayload){
    this.driverService.saveDriver(driverPayload).subscribe(res => {
        console.log(res);
        this.toastr.success("Driver Successfully Added","Success");
    },
    err => {
        console.log(err);
        this.toastr.error("Driver Failed to Add","Fail");
    });
  }

  onSubmit(driverForm:NgForm){
    const driverPayload = JSON.stringify(driverForm.value);
    this.saveDriver(driverPayload);
  }

}
