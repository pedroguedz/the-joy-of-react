import React from 'react';
import { KEYBOARD_LETTERS } from '../../constants';
import Key from '../Key';

function KeyboardRow({ keyStartIndex, keyEndIndex, rowLabel }) {

	return (
		<>
			<div className={`${rowLabel}-row`}>
				{KEYBOARD_LETTERS.split('')
					.slice(keyStartIndex, keyEndIndex)
					.map((letter) => (
						<Key
							key={letter + rowLabel}
							letter={letter}
						/>
					))}
			</div>
		</>
	);
}

export default KeyboardRow;
