import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
  UserName = signal<string | number>("saiKumar");
  num = signal(0);
  display: boolean = false;

  constructor() {
    effect(() => {
      if (this.num() % 2 == 0) {
        this.display = true;
        setTimeout(() => {
          this.display=false;
        }, 1000);
      }else{
        this.display=false;
      }
    }
    )
  }



  updateName(name: HTMLInputElement) {
    this.UserName.set(name.value);
  }



}
