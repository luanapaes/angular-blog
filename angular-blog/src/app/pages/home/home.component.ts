import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { ContentComponent } from '../content/content.component';
import { dataFake } from '../../data/dataFake';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, ContentComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-responsive.component.css']
})
export class HomeComponent {
  cards = dataFake;
}
