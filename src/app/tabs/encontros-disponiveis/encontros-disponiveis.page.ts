import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encontros-disponiveis',
  templateUrl: 'encontros-disponiveis.page.html',
  styleUrls: ['encontros-disponiveis.page.scss']
})
export class EncontrosDisponiveisPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Encontro ' + i,
        note: 'Este é o ' + i + 'º Encontro',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
