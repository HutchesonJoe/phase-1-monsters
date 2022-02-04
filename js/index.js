let monsterArray = []

let getMonsters = fetch('http://localhost:3000/monsters',{
  method: 'GET',
  headers: 
  {
    "Content-type": "application/json",
}
})
.then (response => {return response.json()})
.then (function(data){
  let monsterData = data
  for (let monster of monsterData){
    monsterArray.push(monster)
  }}
)



let monsterDiv = document.getElementById('monster-container')
let monsterList = document.createElement('ul')
let monsterItem = document.createElement('li')



function makeMonsterList(){
for (let monsterObj of monsterArray){
  
  console.log("This")
}}

makeMonsterList()

