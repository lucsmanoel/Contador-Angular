import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <div class="caixa">
      <div class="container">
        <h1>Meu contador {{ name }}!</h1>

        <hr>

        <button (click)="counter.set(counter() - 1)">➖</button>
        <span> Counter: {{ counter() }} </span>
        <button (click)="counter.set(counter() + 1)">➕</button>

        <hr>

        <footer>
          <a target="_blank" href="https://angular.dev/overview">
            Learn more about Angular
          </a>
        </footer>
      </div>
    </div>

    <!-- DIV FLUTUANTE -->
    <div class="flutuante">
      EU QUE FIZ LUCAS MANOEL 
    </div>
  `
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);