const  createRobot  = require('./robot.js');

describe('Verification initial conditions Robot', () => {

	test('Should return error for invalid initial position', () => {
		// Arrange
		const rightMessage = 'Invalid position'

		// Act
		const robotMessage = createRobot([2,15],'South').message

		// Assert
		expect(robotMessage).toBe(rightMessage)
	});

	test('Should return error for invalid direction', () => {
		const rightMessage = 'Invalid direction'
		const robotMessage = createRobot([6,3], 'Wes').message

		expect(robotMessage).toBe(rightMessage)
	
	});
	
	test('Should return error for invalid secuence', () => {
		const expectMessage = 'Invalid secuence'
		const robot = createRobot([6,3], 'East')
		const actualMessage = robot.instructions('RAE')

		expect(expectMessage).toBe(actualMessage)
	});
	
	// test('Should return success creation Robot', () => {
		
	// });
});



// describe('Verification movement Robot', () => {
// 	test('Should return error for walk out of grid', () => {

// 	});

// 	test('Should return last position on the grid', () => {

// 	})
// });