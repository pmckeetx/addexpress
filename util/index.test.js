const util = require( './index' );

test( 'adds 1 + 2 to equal 3', () => {
		expect( util.addNbrs( 1, 2 ) ).toBe( 3 );
	}
)