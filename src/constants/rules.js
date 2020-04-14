const symbols = {
  0:'dirt', 
  1:'apple',
  2:'orange',
  3:'strawberry',
  4:'melon'
}

const paylineOffsets = [
  [0,0,0],
  [-1,-1,-1],
  [1,1,1], 
  [-1,0,1],
  [1,0,-1]
]

const winMultipliers = 
  {
    0:{
      1:0,
      2:0,
      3:0
    },  
    1:{
      1:0,
      2:150,
      3:600
    },    
    2:{
      1:0,
      2:75,
      3:300
    },
    3:{
      1:0,
      2:45,
      3:150
    },
    4:{
      1:0,
      2:45,
      3:150
    },
  }


const reelset = [
  {0:[1,0,0]},
  {1:[1,1,1]},
  {2:[1,2,2]},
  {3:[3,3,3]},
  {4:[4,4,4]},
  {5:[1,0,3]},
  {6:[1,2,4]},
  {7:[1,3,0]},
  {8:[3,4,3]},
  {9:[4,0,4]},
  {10:[1,3,0]},
  {11:[1,4,0]},
  {12:[1,0,0]},
]

const kMaxRotation = 50;

const numberOfReels = reelset[0][0].length;

module.exports = 
{
  symbols,
  paylineOffsets,
  winMultipliers,
  reelset,
  kMaxRotation,
  numberOfReels,
 }