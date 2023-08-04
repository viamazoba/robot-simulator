function createRobot(coordinates, direction) {
  let [x, y] = coordinates
  let orientation = direction
  const directions = ['North', 'East', 'South', 'West'] 

  function initialVerification(){

    if(x>10 || y >10 || x<0 || y<0){
      throw new Error('Invalid position');
    }

    if(!directions.includes(orientation)){
      throw new Error('Invalid direction');
    }


    return 'Success creation Robot'
    
  }
  
  try{
    
    message = initialVerification(x,y)

  }
  catch(error){

    message = error.message
  }

  changeDirection = (instruction) => {
    
    let indexDirections = directions.indexOf(orientation)
    indexDirections = instruction === 'R' ? indexDirections + 1 : indexDirections - 1
    if(indexDirections > 3){
      orientation = 'North'
    }else if(indexDirections < 0){
      orientation = 'West'
    }else{
      orientation = directions[indexDirections]
    }

    // console.log('Sale de la función', orientation)
  }

  advance = () => {
    y = orientation === 'North'? y + 1: (orientation === 'South'? y - 1 : y)
    x = orientation === 'East'? x + 1: (orientation === 'West'? x - 1 : x)
  }

  return {
    message,
    getPosition: () => {
      
      return { coordinates: [x, y], orientation }
    },
    instructions: (stringInstructions) => {
      // función para recibir una serie de instrucciones Ejm: "RAALAL"
      for (let i of stringInstructions){
        if(!'RLA'.includes(i)){
          return 'Invalid secuence'
        }

        if(i === 'R' || i === 'L'){
          changeDirection(i)
        }else{
          advance()
        }

        if(x>10 || y>10 || x<0 || y<0){
          return 'Error secuence position robot out of limits'
        }
        
      }
    }
  }
}


module.exports = createRobot