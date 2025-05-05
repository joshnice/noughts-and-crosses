import { defineStore } from "pinia";
import type { CellValue } from "../types/game"; 

interface GameStore {
  playerOneScore: number; 
  playerTwoScore: number;
  playersTurn: 1 | 2;
  gridXSize: number;
  gridYSize: number;
  gridValue: CellValue[][];
}

export const useGameStore = defineStore("game", {
  state: (): GameStore => {
    return { playerOneScore: 0, playerTwoScore: 0, playersTurn: 1, gridXSize: 3, gridYSize: 3, gridValue: [] }
  },
  actions: {
    newGame() {
      for (let xIndex = 0; xIndex <= this.gridXSize - 1; xIndex++) {
        this.gridValue[xIndex] = [];
        for (let yIndex = 0; yIndex <= this.gridYSize - 1; yIndex++) {
          this.gridValue[xIndex][yIndex] = "none";
        }
      }
    },
    gameFinished(winner: 1 | 2) {
        if (winner === 1) {
            this.playerOneScore++;
        }
        if (winner === 2) {
            this.playerTwoScore++;
        }
    },
    playerSetValue(x: number, y: number) {
      this.gridValue[x][y] = this.playersTurn;
      this.playersTurn = this.playersTurn === 1 ? 2 : 1; 
      console.log([...this.gridValue]);
      // Check if there is three in a row
    }
  },
  getters: {
    getGridSize(state) {
      return { gridXSize: state.gridXSize, gridYSize: state.gridYSize }
    },
    getPlayerTurn(state): 1 | 2 {
      return state.playersTurn;
    },
    getPlayerScore(state) {
        return (player: 1 | 2) => {
            switch (player) {
                case 1:
                    return state.playerOneScore;
                case 2:
                    return state.playerTwoScore;
                default:
                    throw new Error(`Player id ${player} is not supported`)
            }
        }
    },
  }
})