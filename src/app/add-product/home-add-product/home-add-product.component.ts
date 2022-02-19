import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ProductService } from 'src/app/services/products/product.service';
import { formatDate } from '@angular/common';

export class DateObject{
  day:number;
  month:number;
  year:number;
}

@Component({
  selector: 'app-home-add-product',
  templateUrl: './home-add-product.component.html',
  styleUrls: ['./home-add-product.component.css']
})

export class HomeAddProductComponent implements OnInit {
  formTemplate = new FormGroup({
    img: new FormControl(''),
    productName: new FormControl(''),
    productDescription: new FormControl(''),
    keywords: new FormControl(''),
    condition: new FormControl(''),
    freeShipping: new FormControl(''),
    price: new FormControl('')
  })
  date : DateObject ;
  defaultImg : string = "/assets/images/default-image.jpg";
  selectedImg = null;
  conditions = ['new','like new', 'used'];
  sortingType = ['highest price','lowest price','newest','oldest'];

  constructor(private storage : AngularFireStorage, private productService: ProductService) { }

  ngOnInit(): void {
    let curDate = new Date();
    this.date = {day:curDate.getDate(),month:curDate.getMonth()+1,year:curDate.getFullYear()};
    console.log(this.date);
    console.log("uid:" + JSON.parse(localStorage.getItem('user'))['uid']);
    this.resetForm();
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  keywords: string[] = [];

  add(event: MatChipInputEvent): void {
    const word = (event.value || '').trim();

    // Add our keyword
    if (word) {
      this.keywords.push(word);
    }

    // Clear the input value
    if (event.input) {
      event.input.value = '';
    }
  }

  remove(word: string): void {
    const index = this.keywords.indexOf(word);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  onSubmit(form:NgForm){
    //Najpre ubaci vrednosti(jer iz nekog razloga ngModel prihvata samo zadnju vrednost)
    form.value.keywords = this.keywords;
    if(form.valid){
      var imgId = `${this.selectedImg.name}_${new Date().getTime()}`;
      var filePath = `products/${imgId}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImg).snapshotChanges().pipe(
        //'finalize' will be called only when upload is 100% complete
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            this.productService.setProduct({productName:form.value.productName, productDescription:form.value.productDescription, keywords:form.value.keywords, condition:form.value.condition, imgURL:url, freeShipping:form.value.freeShipping, price:form.value.price, date:this.date});
            this.resetForm();
          })
        })
      ).subscribe();
    }

    
  }

  imgInputChange(fileInputEvent: any) {
    if(fileInputEvent.target.files && fileInputEvent.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.defaultImg = e.target.result;
      reader.readAsDataURL(fileInputEvent.target.files[0]);
      this.selectedImg = fileInputEvent.target.files[0];
    }else{
      this.defaultImg = "/assets/images/default-image.jpg";
      this.selectedImg = null;
    }
    console.log(fileInputEvent.target.files[0]);
  }

  openInput(){ 
    // your can use ElementRef for this later
    document.getElementById("imgInput").click();
  }

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      img : "",
      productName: '',
      productDescription: '',
      keywords: '',
      condition: '',
      freeShipping: '',
      price: ''
    });

    this.defaultImg = "/assets/images/default-image.jpg";
  }

}
