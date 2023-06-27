import { Component, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent {
  @Output() onAddSuccess = new EventEmitter<Hero>();

  constructor(private heroService: HeroService) {}

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.onAddSuccess.emit(hero);
    });
  }
}
