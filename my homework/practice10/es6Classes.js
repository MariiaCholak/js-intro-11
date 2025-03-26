
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



class SuperPlayer extends Player {   /// we are using const player    extends adding it
    constructor(nickName, score){
        super(nickName, score)   /// super tels compile look at player
    }
    superAttack(attackedPlayer){    /// we add paramether who will be superattacted the same as  atack ()
        this.score += 2                       ///only !superplayer can use it! player not, and not hero player. because he created from Player
        attackedPlayer.score -= 2
    }
}

class HeroPlayer extends(Player){
    constructor(nickName, score){
        super(nickName, score)
    }
    heal(healedPlayer){
        healedPlayer.score += 1
    }
 }



 const player1 = new Player('Player 1', 5)   /// take a constructor arg
const player2 = new Player('Player 2', 5)

const superPlayer = new SuperPlayer('Super Player', 3)

const heroPlayer = new HeroPlayer('Hero Player', 10)


/// if we cal player1 we can see what he can
/// supperplayer. comes from supper
// . see his function and healer  comes from player



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