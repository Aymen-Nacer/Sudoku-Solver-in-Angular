import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolverService {

  constructor() { }

  board : number[] = []

 insertValues(inputs: NodeListOf<HTMLInputElement>) {
    
    inputs.forEach((input) => {
        if(input.value) {
            this.board.push(parseInt(input.value))
            input.classList.add('input-el') 
        } else {
            this.board.push(0)
            input.classList.add('empty-el')
        }
    })
}

indexToRowCol = (index : number) => { 
    return {row: Math.floor(index/9), col: index%9} 
}

rowColToIndex = (row : number, col : number) => (row * 9 + col)

acceptable = (board: number[], index : number, value :number) => {
    let { row, col } = this.indexToRowCol(index)
    for (let r = 0; r < 9; ++r) {
        if (board[this.rowColToIndex(r, col)] == value) return false
    }
    for (let c = 0; c < 9; ++c) {
        if (board[this.rowColToIndex(row, c)] == value) return false
    }

    let r1 = Math.floor(row / 3) * 3
    let c1 = Math.floor(col / 3) * 3
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[this.rowColToIndex(r, c)] == value) return false
        }
    }
    return true
}

getChoices = (board: number[], index : number) => {
    let choices:number[] = []
    for (let value = 1; value <= 9; ++value) {
        if (this.acceptable(board, index, value)) {
            choices.push(value)
        }
    }
    return choices
}

bestBet = (board : number[]) => {

    let index: number = -1
    let moves: number[] = [];
    let bestLen: number = 100;

    for (let i = 0; i < 81; ++i) {
        if (!board[i]) {
            let m = this.getChoices(board, i)
            if (m.length < bestLen) {
                bestLen = m.length
                moves = m
                index = i
                if (bestLen == 0) break
            }
        }
    }
    return { index, moves }
}

solve = () => {
    let { index, moves } = this.bestBet(this.board) 
    if (index == null) return true          
    for (let m of moves) {
        this.board[index] = m                  
        if (this.solve()) return true        
    }
    this.board[index] = 0
    return false
}

populateValues(inputs: NodeListOf<HTMLInputElement>) {
    inputs.forEach((input, i) => input.value = this.board[i].toString())
}
}
