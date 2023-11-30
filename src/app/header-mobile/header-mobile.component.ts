import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {

  menuOpen: boolean = false;
  menuOpenImg: string[] = ['burgerMenuClosed.png', 'burgerMenuClosedTransition.png'];
  currentMenuImg: string = this.menuOpenImg[0];


  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    // Füge eine kurze Verzögerung hinzu, um die CSS-Transition zu ermöglichen
    setTimeout(() => {
      this.currentMenuImg = this.menuOpen ? this.menuOpenImg[1] : this.menuOpenImg[0];
    }, 250); // Die Verzögerung sollte halb so lang wie deine CSS-Transition sein
  }
}
