import React from 'react';

export const LanguageSelection = ({ languages }) => {
	return (
		<div className="grid ml-5 grid-cols-3 p-10">
			{languages.map((language) => (
				<label className="inline-flex items-center mt-3">
					<input type="checkbox" className="h-5 w-5 text-blue-600" />
					<span className="ml-2 text-black">{language}</span>
				</label>
			))}
		</div>
	);
};