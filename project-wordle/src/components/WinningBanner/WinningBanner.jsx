import React from 'react';
import Banner from '../Banner/Banner';

function WinningBanner({ numOfGuesses, handleResetGame }) {
	return (
		<Banner status='happy' handleResetGame={handleResetGame}>
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>
					{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
				</strong>
				.
			</p>
		</Banner>
	);
}

export default WinningBanner;
