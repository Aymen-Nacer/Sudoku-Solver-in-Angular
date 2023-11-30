import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
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
    console.log('onSolved');
  }

  onCleared() {
    console.log('onCleared');
  }

  onLoaded() {
    console.log('onLoaded');
  }
}
