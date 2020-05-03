import { Component, OnDestroy, OnInit, } from '@angular/core';

import { Router } from '@angular/router';


import { FormGroup, FormBuilder } from '@angular/forms';


import { ColorPickerService } from 'src/app/core/services/color-picker.service';
import { FaleConosco } from './fale-conosco.model';
import { FaleConoscoService } from './fale-conosco.service';


@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss']
})
export class FaleConoscoComponent implements OnInit {

  public userID = '';

  faleConosco: FaleConosco;
  public faleConoscoForm: FormGroup;

  public iniciando = true;


  constructor(
              private router: Router,
              private formBuilder: FormBuilder,
              public faleConoscoService: FaleConoscoService) {
    this.criarForm();

  }

  // ngOnDestroy(): void {
  // }

  ngOnInit(): void {
    this.userID = localStorage.getItem('user');
  }

//   getUsers(): Observable<any> {
//     return this.auth.user$;
//  }

  criarForm() {
    this.faleConoscoForm = this.formBuilder.group({
      nome: [''],
      comentario: [''],
      contato: this.formBuilder.group({
        email: [''],
        telefone:['']
      })
    });
  }

  
  insertFaleConosco() {
    console.log(this.faleConoscoForm.value);
    this.faleConosco = this.faleConoscoForm.value
    this.faleConosco.usuario = this.userID
    this.faleConoscoService.addMensagemFaleConosco(this.faleConosco);
    this.router.navigate(['/home']);  }

}
