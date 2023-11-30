import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { DrawBoardService } from './draw-board.service';
import { LoadBoardsService } from './load-boards.service';
import { SolverService } from './solver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'soduku-solver';
  @ViewChild('puzzle') puzzleElement!: ElementRef;

  constructor(
    private drawBoard: DrawBoardService,
    private loadBoards: LoadBoardsService,
    private solver: SolverService
  ) {}

  ngAfterViewInit() {
    const sudokuBoard: Element = this.puzzleElement.nativeElement;
    this.drawBoard.drawBoard(sudokuBoard);
  }

  ngOnInit() {}

  onSolved() {
    let inputs: NodeListOf<HTMLInputElement> =
      this.puzzleElement.nativeElement.childNodes;

    this.solver.insertValues(inputs);

    if (this.solver.solve()) {
      this.solver.populateValues(inputs);
    } else {
      alert("Can't solve this puzzle!");
    }
  }

  onCleared() {
    let inputs: NodeListOf<HTMLInputElement> =
      this.puzzleElement.nativeElement.childNodes;

    inputs.forEach((input) => {
      input.value = '';
    });
  }

  onLoaded() {
    let inputs: NodeListOf<HTMLInputElement> =
      this.puzzleElement.nativeElement.childNodes;

    this.loadBoards.loadRandomBoard(inputs);
  }
}
