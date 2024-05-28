import React from 'react';

function GuessInput({ submitAction, gameStatus }) {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(e) {
		e.preventDefault();

		if (guess.length !== 5) {
			window.alert('Guess must be 5 letters long.');
			return;
		}

		submitAction(guess);

		setGuess('');
	}

	return (
		<form
			className='guess-input-wrapper'
			onSubmit={handleSubmit}
		>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				name='guess-input'
				type='text'
				required={true}
				disabled={gameStatus !== 'playing'}
				minLength={5}
				maxLength={5}
				pattern='[A-Za-z]{5}'
				title={
					gameStatus !== 'playing'
						? 'Game over. Guess input disabled.'
						: 'Enter a 5-letter word'
				}
				value={guess}
				onChange={(e) => {
					setGuess(e.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
