const
 { 
   symbols,
   paylineOffsets,
   winMultipliers,
   reelset,
   kMaxRotation,
   numberOfReels,
  }
  = require('../../constants/rules')

const slotsBrain = {
    initiateReels: async () => {
      let reels = [];
      for(let currentReel = 0; currentReel < numberOfReels; currentReel++) {
        reels[currentReel] = reelset.map((reelsetReel,index) => reelsetReel[index][currentReel])
      }
      return reels;
    },
    setImgReels: async (reels) => {
      let imgReels = [];
      for(let currentReel = 0; currentReel < reels.length; currentReel++) {
        imgReels[currentReel] = [];
        for(let currentPosition = 0; currentPosition < reels[currentReel].length; currentPosition++) {
          imgReels[currentReel].push(symbols[reels[currentReel][currentPosition]])
        }
      }
      return imgReels;
    },
    getRandomReelRotation: async () => {
      return Math.floor(Math.random() * kMaxRotation) + 1;
    },
    moveReel: async  (reel, rotation) => {
      for (let i = 0; i < rotation; i++)
      {
          reel.unshift(reel.pop());
      }
      return reel;
    },
    setPaylineMatches: async (reels, numberOfPaylines) => {
      let paylineMatches = [];
      for(let currentPayline = 0; currentPayline < numberOfPaylines; currentPayline++) {
        paylineMatches[currentPayline] = [];
        for(let reelIndex = 0; reelIndex < reels.length; reelIndex++) {
          var indexFromReel = paylineOffsets[currentPayline][reelIndex] < 0 ? reels[reelIndex].length+paylineOffsets[currentPayline][reelIndex] : paylineOffsets[currentPayline][reelIndex];
          paylineMatches[currentPayline].push(reels[reelIndex][indexFromReel])
        }
      }
      return paylineMatches;
    },
    calculatePayouts: async (paylineMatches) => {
      let multipliers = [];
      for(let currentMatch = 0; currentMatch < paylineMatches.length; currentMatch++) {
        let hit = null;
        let numberOfHit = 1;
        for(let currentSymbolPosition = 0; currentSymbolPosition < paylineMatches[currentMatch].length; currentSymbolPosition++) {
          if(hit == null) {
            hit = paylineMatches[currentMatch][currentSymbolPosition]
          }
          else if (hit == paylineMatches[currentMatch][currentSymbolPosition]){
            numberOfHit++;
            if(numberOfHit == numberOfReels) {
              multipliers.push(winMultipliers[hit][numberOfHit]);
              break;
            }
          } else {
            multipliers.push(winMultipliers[hit][numberOfHit]);
            break;
          }
        }
      }
      return multipliers;
    },
    spinReels: async (reels, imgReels) => {
      for(let i = 0; i < reels.length; i++) {
        let rotation = await slotsBrain.getRandomReelRotation();
        console.log('reel ' + i + ' rotation: ' + rotation)
        reels[i] = await slotsBrain.moveReel(reels[i], rotation)
      }
      imgReels = await slotsBrain.setImgReels(reels);
      return imgReels;
    }
}

module.exports = slotsBrain;