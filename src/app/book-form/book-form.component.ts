import { Component,Input } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
@Input() affiche!:boolean;
inputForm = new FormGroup({
title:new FormGroup(''),
author:new FormGroup(''),
statut:new FormGroup(''),
})
}
