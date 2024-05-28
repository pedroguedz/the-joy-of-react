import React from 'react';
import Banner from '../Banner/Banner';

function LosingBanner({ answer, handleResetGame }) {
	return (
		<Banner status='sad' handleResetGame={handleResetGame}>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</Banner>
	);
}

export default LosingBanner;
