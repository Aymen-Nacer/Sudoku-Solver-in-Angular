import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawBoardService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  drawBoard(sudokuBoard: Element) {
    const squares = 81;

    for (let i = 0; i < squares; i++) {
      const inputElement = this.renderer.createElement('input');
      this.renderer.setAttribute(inputElement, 'type', 'number');
      this.renderer.setAttribute(inputElement, 'min', '1');
      this.renderer.setAttribute(inputElement, 'max', '9');
      if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
      ) {
        this.renderer.addClass(inputElement, 'odd-section');
      }
      this.renderer.appendChild(sudokuBoard, inputElement);
    }
  }
}
