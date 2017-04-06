import { Component, OnInit, ElementRef } from '@angular/core';

import { UserService } from "../user.service"
import { User } from "../user"

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	name
	email
	phone
	schoolname

	response

  constructor(private elRef: ElementRef, private _userService: UserService) { }

  ngOnInit() {
  	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 30, // Creates a dropdown of 15 years to control year
	    formatSubmit: 'yyyy/mm/dd',
	    hiddenName: true,
	    showMonthsShort: true,
	    today: '',
	    close: 'OK',
	    closeOnSelect: true
	  });
  }

  addUser () {


  	let data = {
  		"name": this.name,
  		"degree": $("input[type=radio][name=group1]:checked").val(),
  		"grade": $("input[type=radio][name=group2]:checked").val(),
  		"schoolname": this.schoolname,
  		"email": this.email,
  		"phone": this.phone,
  		"youth_day": $('#datepicker1').val(),
  		"unions_day": $('#datepicker2').val(),
  		"union_women_day": $('#datepicker3').val()
  	}
  	console.log(data)
  	return this._userService.addUser(data).subscribe(response => this.response = response)
  	
  }

}
