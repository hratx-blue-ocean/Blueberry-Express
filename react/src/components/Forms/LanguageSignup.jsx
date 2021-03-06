import React, { useState, useEffect, useContext } from 'react';
import { fetchAllLanguages } from '../../api.js';
import { AuthContext } from '../../auth';
import { SmallBtn } from '../Buttons/SmallBtn';
import { setUserLanguages } from './../../api.js';

export const LanguageSignup = ({ action }) => {
	const [languages, setLanguages] = useState(null);
	const [chosen, setChosen] = useState([]);
	const context = useContext(AuthContext);

	useEffect(() => {
		fetchAllLanguages()
		.then(data => {
			setLanguages(data);
			setChosen(context.user.languages);
		})
		.catch(err => {
			console.error(err);
		})
	}, [])

  useEffect(() => {
		if (chosen.length) {
			chosen.forEach((lang) => {
			  document.getElementById(lang.name).checked = true;
			})
		}
	}, [chosen])

	if (languages) {
		return (
			<div id="language-selection" className="grid ml-5 grid-cols-3 p-10">
				{languages.languages.map( language => (
					<label className="inline-flex items-center mt-3" key={language.id}>
						<input type="checkbox" className="h-5 w-5 text-blue-600" id={language.name} value={language.id} />
						<span className="ml-2 text-black">{language.name}</span>
					</label>
				))}
				<div className="absolute bottom-0 right-0">
					<SmallBtn label="submit" handleClick={action}/>
				</div>
			</div>
		);
	} else {
		return (
			<></>
		)
	}
};