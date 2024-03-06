import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card-responsive.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  dateCard: string = "";

  @Input()
  Id: string | null = "0";
}
