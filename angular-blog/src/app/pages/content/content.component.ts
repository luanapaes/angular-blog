import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string | undefined = "";
  private id: string | null = "0";


  constructor(
    private route: ActivatedRoute) { } // informações sobre a url

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
      //resgata o valor do id que é acrescentado à url quando um card é clicado. 
    )

    this.setValuesToComponent(this.id); //chama a função que altera o valor das propriedades do componente
  }

  //este método recebe o id
  setValuesToComponent(id: string | null) {
      const result = dataFake.filter(article => article.id == id)[0]// filtra até encontrar o article(card) com o id correspondente

      // ao encontrar o card com o id correspondente, monta a página com suas informações que estão contidas no file dataFake.ts
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
}
