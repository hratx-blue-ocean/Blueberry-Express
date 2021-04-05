import React from 'react';

export const LanguageSelection = ({ languages }) => {
	return (
		<div className="flex flex-col ml-5">
			{languages.map((language) => (
				<label className="inline-flex items-center mt-3">
					<input type="radio" className="form-radio h-5 w-5 text-blue-600" />
					<span className="ml-2 text-black">{language}</span>
				</label>
			))}
		</div>
	);
};