import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ogrenci',
  templateUrl: './ogrenci.component.html',
  styles: [
  ]
})
export class OgrenciComponent implements OnInit {

  gonderildiMi = false;
  kayit:FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.kayit = this.formBuilder.group({
      ad: ['' , Validators.required],
      soyad: ['', Validators.required],
      dogumTarihi:['']
    })
  }

  get f()
  {
    return this.kayit.controls;
  }

  onSubmit(data)
  {
    this.gonderildiMi = true;

    if(this.kayit.invalid)
    {
      alert("Form gecersiz");
      return;
    }

    alert("Form gecerli");

    // serviceOgrenci.Kayıt(data);
  }

}
