import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MustMatch } from './validators/must-much.validator'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
    myForm: FormGroup = new FormGroup({});
  
    constructor(private fb: FormBuilder){ }
  
    ngOnInit(){  
      this.myForm =  this.fb.group({
        firstName: ['', [
          
        ]
      ],
        secondName: ['', [

        ]
      ],
        email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
        firstPassword: ['', [
          Validators.required,
          Validators.pattern(/(?=.*[0-9])(?=.*[А-Яа-яA-Za-z])(?=.*[!@#$%^&*])/),
          Validators.minLength(6)
        ]
      ],
        secondPassword: ['', [
          Validators.required
          
        ]
      ]
  }, {
    validator: MustMatch('firstPassword', 'secondPassword')
  });
}

onSubmit(){
  
  const controls = this.myForm.controls;
  console.log(controls);

 
  if (this.myForm.invalid) {
    
    Object.keys(controls)
    .forEach(controlName => controls[controlName].markAsTouched());
    
    /** Прерываем выполнение метода*/
    return;
    }

  alert('Регистрация прошла успешно!')
  console.log(this.myForm.value);
  }
}



 