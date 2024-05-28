import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard/Keyboard';
import WinningBanner from '../WinningBanner/WinningBanner';
import LosingBanner from '../LosingBanner/LosingBanner';

function Game() {
	const [answer, setAnswer] = React.useState(() => sample(WORDS));
	const [attempts, setAttempts] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('playing');

	console.log({ gameStatus });
	console.log({ answer });

	function handleResetGame() {
		const newAnswer = sample(WORDS);
		setAnswer(newAnswer);
		setAttempts([]);
		setGameStatus('playing');
	}

	function submitAction(guess) {
		const nextGuess = { guess };
		const nextGuesses = [...attempts, nextGuess];

		setAttempts(nextGuesses);

		console.log(nextGuess);

		if (guess === answer) {
			setGameStatus('win');
		} else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lose');
		}
	}

	const validatedGuesses = attempts.map((attempt) => {
		return checkGuess(attempt.guess, answer);
	});

	console.log('Validated guesses:');
	console.log(validatedGuesses);

	return (
		<>
			<GuessResults validatedGuesses={validatedGuesses} />

			<GuessInput
				submitAction={submitAction}
				gameStatus={gameStatus}
				answer={answer}
			/>

			<Keyboard validatedGuesses={validatedGuesses} />

			{gameStatus === 'win' && (
				<WinningBanner
					numOfGuesses={attempts.length}
					handleResetGame={handleResetGame}
				/>
			)}

			{gameStatus === 'lose' && (
				<LosingBanner
					answer={answer}
					handleResetGame={handleResetGame}
				/>
			)}
		</>
	);
}

export default Game;
