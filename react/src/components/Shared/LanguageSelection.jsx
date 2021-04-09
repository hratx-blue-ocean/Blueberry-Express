import React, { useState, useEffect, useContext } from 'react';
import { fetchAllLanguages } from '../../api.js';
import { AuthContext } from '../../auth';

export const LanguageSelection = () => {
	const [languages, setLanguages] = useState(null);
	const context = useContext(AuthContext);

	useEffect(() => {
		console.log('Logged in:', context.loggedIn);
		if (context.loggedIn) {
			fetchAllLanguages()
			.then(data => {
				setLanguages(data);
			})
			.catch(err => {
				console.error(err);
			})
		}
	}, [])

	if (languages) {
		return (
			<div id="language-selection" className="grid ml-5 grid-cols-3 p-10">
				{languages.languages.map( language => (
					<label className="inline-flex items-center mt-3" key={language.id}>
						<input type="checkbox" className="h-5 w-5 text-blue-600" value={language.id} />
						<span className="ml-2 text-black">{language.name}</span>
					</label>
				))}
			</div>
		);
	} else {
		return (
			<></>
		)
	}
};