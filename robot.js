function createRobot(coordinates, direction) {
  let [x, y] = coordinates
  let orientation = direction
  const directions = ['North', 'East', 'South', 'West'] 

  function initialVerification(){
    try{

      if(x>10 || y >10 || x<0 || y<0){
        throw new Error('Invalid position');
      }

      if(!directions.includes(orientation)){
        throw new Error('Invalid direction');
      }
    }
    catch(error){
      message = error.message
    }
  }

  initialVerification(x,y)

  return {
    message,
    getPosition: () => {
      
      return { coordinates: [x, y], orientation }
    },
    advance: () => {
      // función para avanzar
    },
    turnRight: () => {
      // función para girar a la derecha
    },
    turnLeft: () => {
      // función para girar a la izquierda
    },
    instructions: (stringInstructions) => {
      // función para recibir una serie de instrucciones Ejm: "RAALAL"
      // En este metodo se va crear 
    }
  }
}

module.exports = createRobot


//console.log(createRobot([2,11], "North").message);