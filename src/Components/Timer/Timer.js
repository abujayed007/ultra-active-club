const addToDb = () =>{
let timer = {}
localStorage.setItem('Break-Time', JSON.stringify(timer))
}
export {addToDb}