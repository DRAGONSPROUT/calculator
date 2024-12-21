import { Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MaterialModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
; 

  nums : any ;
  temp : any = 0;
  multemp : any = 1;
  state = true;
  opeartion : any = "";
  mem : any = 0;

  numb(x : any)
  { 
    if(this.nums == 0)
    {
      this.nums = " ";
    }
    this.nums = this.nums + document.getElementById(x)?.innerText;
    console.log(this.nums);
  }

  reset(datd : string)
  {
    this.nums = "0";
    this.temp = 0;
    this.multemp = 1;
    document.getElementById(datd)?.removeAttribute("disabled");
    const elements = document.getElementsByClassName("number");
    Array.from(elements).forEach((element) => {
      element.removeAttribute("disabled");
    });
    document.getElementById("clear")?.removeAttribute("disabled");
    document.getElementById("equals")?.removeAttribute("disabled");
    document.getElementById("memory")?.removeAttribute("disabled");
  }

  resetc()
  {
    this.nums = this.nums.slice(0,-1);
  }

  add()
  {

      this.temp = this.temp + Number.parseFloat(this.nums);
      console.log(this.temp);
      this.nums = "";
      this.opeartion = "+";

  }

  subtract()
  {
      if(this.temp == 0)
      this.temp = Number.parseFloat(this.nums)-0;
      else
      this.temp = this.temp - Number.parseFloat(this.nums);
      console.log(this.temp);
      this.nums = "";
      this.opeartion = "-";

  }

  divide()
  {   
      if(this.multemp == 1)
      this.multemp = Number.parseFloat(this.nums)/this.multemp;
      else
      this.multemp = this.multemp / Number.parseFloat(this.nums);
      console.log(this.multemp);
      this.nums = "";
      this.opeartion = "/";
  }

  multiply()
  {
      this.multemp = this.multemp * Number.parseFloat(this.nums);
      console.log(this.multemp);
      this.nums = "";
      this.opeartion = "*"
  }
  equals()
  { 
    
    if(this.opeartion == "+")
      {
        if(this.nums == "")
          this.nums="0";
        
        this.temp = this.temp + Number.parseFloat(this.nums);
      }
    else if(this.opeartion == "-")
      {
        this.temp = this.temp - Number.parseFloat(this.nums);
      }
    else if(this.opeartion == "*")
      {
        if(this.nums == "")
          this.nums="1";
        
        this.multemp = this.multemp * Number.parseFloat(this.nums);
        this.temp = this.multemp;
      }
    else if(this.opeartion == "/")
      { 
        if(this.nums == "")
          this.nums="1";

        this.multemp = this.multemp / Number.parseFloat(this.nums);
        this.temp = this.multemp;
      }
    this.nums = (this.temp);
    this.temp = 0;
    this.multemp = 1;
  }

  sqrt()
  {
    if(!(this.nums == 0) )
    this.nums = Math.sqrt(Number.parseFloat(this.nums));
  }

  percent()
  { 
    if(!(this.nums == 0) )
    this.nums = Number.parseFloat(this.nums)/100;
  }

  off(data : string)
  {
    this.nums = "";
    this.state = false;
    document.getElementById(data)?.setAttribute("disabled","true");
    const elements = document.getElementsByClassName("number");
    Array.from(elements).forEach((element) => {
      element.setAttribute("disabled", "true");
    });
    document.getElementById("clear")?.setAttribute("disabled","true");
    document.getElementById("equals")?.setAttribute("disabled","true");
    document.getElementById("memory")?.setAttribute("disabled","true");
}

memory()
{
  this.nums = this.mem;
}

memp()
{
  this.mem = this.mem + this.nums;
  console.log(this.mem);
}

mems()
{
  if(this.mem == 0)
  this.mem = this.nums-this.mem;
  else
  this.mem = this.mem - this.nums;
}
}
