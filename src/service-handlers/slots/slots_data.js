const slotsBrain = require("./slots_brain")

module.exports = class SlotsData {

  constructor() {
    this.reels = [];
    this.imgReels = [];
    this.paylineMatches = [];
    this.multipliers = [];
    this.currentBalance = 100;
    this.currentBet = 1;
  }  
  toString() {
    return `
    reels:\n${this.reels.map((r,i) => `reels[${i}]: ${r.map((rr) => rr)}\n`).join("")}
    imgReels:\n${this.imgReels.map((r,i) => `imgReels[${i}]: ${r.map((rr) => rr)}\n`).join("")}
    payLineMatches: ${this.paylineMatches}
    multipliers: ${this.multipliers}
    currentBalance: ${this.currentBalance}
    currentBet: ${this.currentBet}
    `
  }
}