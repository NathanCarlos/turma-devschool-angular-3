import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Home da Mjv School';

  number = 50;

  dateToday = new Date();

  year = this.dateToday.getFullYear();

  price = 15.50;

  client = {
    name: 'Nathan',
    email: 'nathan@gmail.com',
    password: '123456'
  };

  products = [
    {
      id: 1,
      description: 'Televisão 42 Polegadas Lg',
      price: 2500,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },
    {
      id: 2,
      description: 'Televisão 42 Polegadas Samsung',
      price: 2460,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },
    {
      id: 3,
      description: 'Televisão 55 Polegadas Lg',
      price: 4000,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },
    {
      id: 4,
      description: 'Televisão 65 Polegadas Lg',
      price: 5500,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },
    {
      id: 5,
      description: 'Televisão 65 Polegadas Lg',
      price: 5500,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },{
      id: 6,
      description: 'Televisão 65 Polegadas Lg',
      price: 5500,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },
    {
      id: 7,
      description: 'Televisão 65 Polegadas Lg',
      price: 5500,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },
    {
      id: 8,
      description: 'Televisão 65 Polegadas Lg',
      price: 5500,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    },
    {
      id: 9,
      description: 'Televisão 65 Polegadas Lg',
      price: 5500,
      imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
