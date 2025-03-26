/*
-Create a class called as Player
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
-Create a method called as getInfo() which returns the score for the player object info in the format: {nickName}'s score is {score}.
-Create a method called as attack() which takes a player object as argument and 
increases the attacking player's score by 1 while it decreases the attacked player's score by 1
-Create a method called as damage() which decreases the score of the player object by 1
*/

class Player  {
    constructor(nickName, score) {
    this.nickName = nickName          /// this like go one step back  to actual class
    this.score = score    
}
   getInfo(){
    return `${this.nickName}'s score is ${this.score}`  /// this - refer to that nickname object, player, we need to use this!!
   }                                                    /// nickName store in iur object,  and we can we it highligth with each other 
  
   attack(attackedPlayer){ //// it's take arr of attack object, we call it object but other words iys an attacked palyer
    this.score += 1    /// function call with a  another player object
   attackedPlayer.score -= 1        /// so attack adds one to the person that's attacking and  subtract a score to person who was attacked
}                           /// so player2 will ne one who lose  a score and playser1  gain a score
   /// this  refer to object one so this score will be player 1
//// player1.attack(player2)  
     ///// this ia a void functin doing action based on what we  wanted to do

   damage(){
    this.score -= 1     /// remove the score from object that will be call, because we don't have any arr, take score from 1
   }   /// Js read this as player1.demage()

  
}



/*
-Create a class called as SuperPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as superAttack() which takes a player object as argument and 
increases the attacking player's score by 2 while it decreases the attacked player's score by 2
*/

class SuperPlayer extends Player {   /// we are using const player    extends adding it
    constructor(nickName, score){
        super(nickName, score)   /// super tels compile look at player
    }
    superAttack(attackedPlayer){    /// we add paramether who will be superattacted the same as  atack ()
        this.score += 2                       ///only !superplayer can use it! player not, and not hero player. because he created from Player
        attackedPlayer.score -= 2
    }
}




/*
-Create a class called as HeroPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as heal() which takes a player object as argument and 
increases the healed player's score by 1.
*/
 class HeroPlayer extends(Player){
    constructor(nickName, score){
        super(nickName, score)
    }
    heal(healedPlayer){
        healedPlayer.score += 1
    }
 }

/*
Create 2 player objects with below information
player1 = { nickName: 'Player 1', score: 5 }
player2 = { nickName: 'Player 2', score: 5 }

Create a superPlayer object with below information
superPlayer = { nickName: 'Super Player', score: 3 }

Create a heroPlayer object with below information
heroPlayer = { nickName: 'Hero Player', score: 10 }
*/

const player1 = new Player('Player 1', 5)   /// take a constructor arg
const player2 = new Player('Player 2', 5)

const superPlayer = new SuperPlayer('Super Player', 3)

const heroPlayer = new HeroPlayer('Hero Player', 10)


/// if we cal player1 we can see what he can
/// supperplayer. comes from supper
// . see his function and healer  comes from player


/*
Execute the attack() method for player1 over player2
    -this will decrease player2's score by 1 and increase player1's score by 1
Execute the attack() method for player1 over superPlayer
    -this will decrease superPlayer's score by 1 and increase player1's score by 1
Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
    -this will decrease player2, player1 and heroPlayer's score by 2 and increase superPlayer's score by 6
Execute the heal() method for heroPlayer over player1 and player2
    -this will increase player1 and player2's score by 1
Execute the attack() method for player1, player2 and heroPlayer over superPlayer
    -this will decrease superPlayer's score by 3 and increase player1, player2 and heroPlayer's score by 1
Execute the damage() method for player1 and player2
    -this will decrease player1 and player2's score by 1
*/

player1.attack(player2)  //// it should subtract 1 point from player2  and add one to player1   we had 5 and 5 => 6 , 4(player2)
console.log(player1.getInfo())    /// check if it's work 6
console.log(player2.getInfo()) //4

player1.attack(superPlayer)
console.log(player1.getInfo())
console.log(superPlayer.getInfo())

superPlayer.superAttack(player2)
superPlayer.superAttack(player1)
superPlayer.superAttack(heroPlayer)

heroPlayer.heal(player1)
heroPlayer.heal(player2)

player1.attack(superPlayer)
player2.attack(superPlayer)
heroPlayer.attack(superPlayer)

player1.damage()
player2.damage()

/// we can add to all of them get info how i did in first 2 or use loop

const  players = [player1, player2, superPlayer, heroPlayer]
for( const player of players){
    console.log(player.getInfo())
}
/*
Print information of all the players using getInfo() method

EXPECTED OUTPUT:
Player 1's score is 6
Player 2's score is 3
Super Player's score is 5
Hero Player's score is 9
*/