const team = {
  _players: [
    { firstName: "Fred", lastName: "Smith", age: 21 },
    { firstName: "Steve", lastName: "Done", age: 21 },
    { firstName: "John", lastName: "Max", age: 21 },
  ],
  _games: [
    { opponent: "Wizards", teamPoints: "40", opponentPoints: "32" },
    { opponent: "Okes", teamPoints: "44", opponentPoints: "33" },
    { opponent: "Wimns", teamPoints: "20", opponentPoints: "52" },
  ],
  get players (){
    return this._player
  },
  get games (){
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge){
   const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
   this._players.push(player)

  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
          }
          this._games.push(game)
  }
};
team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Titans', 100, 98)
team._players.map((player) => {
  console.log(`Player: ${player.firstName} ${player.lastName}, Age: ${player.age} `)
})
team._games.map(game =>{
  console.log(`Team Against: ${game.opponent}, Team Points: ${game.teamPoints} Opponent Points: ${game.opponentPoints}`)
})

