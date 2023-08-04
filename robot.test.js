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
	
	test('Should return Success creation Robot', () => {
		const expectMessage = 'Success creation Robot'
		const robot = createRobot([6,3], 'West')
		const actualMessage = robot.message

		expect(expectMessage).toBe(actualMessage)
	});
});



describe('Verification movement Robot', () => {

	test('Should return Error secuence position robot out of limits', () => {
		const expectMessage = 'Error secuence position robot out of limits'
		const robot = createRobot([2,10],'South')
		const actualMessage = robot.instructions('RRA')
		expect(expectMessage).toBe(actualMessage)

	});

	test('Should return last position on the grid', () => {
		const expectPosition = { coordinates: [4, 8], orientation: 'South' }
		const robot = createRobot([4,10], 'North')
		robot.instructions('RRAA')

		expect(expectPosition).toEqual(robot.getPosition())
	})
});