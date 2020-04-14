# 2020-04-08

## 09:00

#### Download project files and start Slots Trello Project Board

## 11:30

#### Initial Project Board Completed.
![Image of TrelloBoard](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/Initial%20Project%20Board.PNG)

# 2020-04-09

## 13:00

#### Basic server communications finished setup. POST bet + balance and return dummy newBalance.

## 14:00

#### Started working on game logic

## 16:00

#### Separated logic into Rules, Data and Brain. Spinning each reel server-side now works.
![Image of CodeTesting](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/CodeTesting.PNG)

# 2020-04-10

## 12:00

#### "New Game" now renders table with "wheels" and their symbols at starting position as well as reset balance and betsize.
![Image of NewGame](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/NewGame.PNG)

## 13:30

#### Spinning reels now work correctly
![Image of SpinningReels](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/smallSpin.gif)

# 2020-04-12

## 10:30

#### Basic slots working

#### Working: Flexibility / Scalability. Can have different betsizes, more/less symbols, paylines, reels, number of reels, multipliers and maxrotations on reels.

#### Not Working: Error Handling. Need to notify player when betsize is too large or amount is zero.
![Image of WorkingWithoutErrorHandling](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/working%20slots%20without%20error%20handling.JPG)

## 11:00

#### Bet > Balance error handling implemented.
![Image of InsufficientFunds](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/insufficient_funds.JPG)

## 12:30

#### Pushed to GitHub with install instructions. Disabled spin button on load. Some code-formatting.

## 12:30

#### Instructions tested and working. Now asking peers to run project.

- [x] **Minimum Goal Achieved**

## 14:30

#### Project peer-reviewed (2:00 hours):
###### Question / input: "who is 'someone else' that will 'run the project easily'?" customer? CEO? developer?
###### Answer: I believe it is "A senior Consultant with focus on IT Advisory, IT Management as well as Enterprise, System and IT Architecture."
###### Question / input: "did they set a max bet? max bets are not controlled for server-side".
###### Answer: no max bet, it's my own invention. My focus is not on general error handling, security nor routing, but on working logic and presentation for my "Minimum Goals", since time is a big factor and I lack experience with NodeJS.
###### Question / input: "your slots game seems very EV- for the house, I hope you're not applying for a job at a casino"
###### Answer: Yes, I'm either misinterpreting the data supplied or the data is off by a factor of ~10 (guess) or the house is very generous.
###### Question / input: "you have if-statements in your routes, is that a common theme in NodeJS?
###### Answer: I think not. I'm just not proficient enough in node to write best practice routes.
###### Question / input: "You should probably deploy it in case 'someone else' is not who you think it is".
###### Answer: yes, I probably should and I probably will.
###### Question / input: "variable names like 'kReelset1' seems bad."
###### Answer: agreed, they are currently named after excel-sheet columns, but I will probably rename them to make the code more readable.
###### Question / input: (follow-up comment) "there's no problem in developers not making a releasable product in 7 days. There are problems with developers submitting code that no one else can run or take over."
###### Answer: yes, thank you, I will keep that in mind, and definitely rename the variables.

# 2020-04-13

## 13:30

#### Peer-review refactor complete. Did deploy to azure, but session state messed with XMLHttpRequest => alternative cost too high to fix.

## 15:30

#### Full documentation added to GitHub as well as link to documentation in README.

# 2020-04-14

## 10:00

#### 10:00 - Having studied the rules and mechanics of slots, as well as other online slots creators code and some tutorials, I've concluded that there's too little time left for expanding the client-side. However - I learned that the multipliers multiply paylines and not bets as assumed. In retrospect the first day of the project should have been taking this step and not assuming their function. I've concluded the final step ought to be to include paylines * multipliers-functionality to make the house not lose money on the slots game.I will try to draw inspiration from the following design:
![Image of Inspiration](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/Inspiration.JPG)

## 12:00

#### 12:00 - New structure implemented.
![Image of NewStructure](https://github.com/WiltonHotz/slots_game/blob/master/assets/img/newStructure.JPG)

## 13:00

#### Project peer-reviewed (1:00 hour):
##### Project structure
###### Get some folders in there. Might be overkill for this project size but I'd put routes in src/api/, brain & data in src/service-handlers/slots/, images in asseta/img/
- [x] Implemented at 14:00
##### Variable names
###### Try to avoid abbrevations in 99% of cases. As long as the code is super obvious it doesn't matter if it's longer imo.
- [x] Implemented at 14:30
##### Routes
###### Routes look a bit unorthodox with the if-statements. You would usually use framworks like express for this, but given the task constraints it might be OK.
###### It seems you display "Hello world" if incoming request is not matched, you might want to change that to a 404.
- [x] Implemented at 14:30
##### Documentation
###### You might want to rename your documentation to something more fitting, and then add a more standard type of documentation, for example: https://github.com/mpneuried/rsmq-worker (Short intro, some config, some method descriptions)
##### Git commit history
- [x] Implemented at 14:30
###### You might want to merge commits. 10 times updating README looks so-so. You could probably have 3-6 commits with headers and paragraphs for this project.
- [x] Implemented at 15:30

