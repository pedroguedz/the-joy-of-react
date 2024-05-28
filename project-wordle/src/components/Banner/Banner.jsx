import React from 'react';

function Banner({ children, status, handleResetGame }) {
	return (
		<div className={`${status} banner`}>
			{children}
			{handleResetGame && <button onClick={handleResetGame}>START A NEW GAME</button>}
		</div>
	);
}

export default Banner;
