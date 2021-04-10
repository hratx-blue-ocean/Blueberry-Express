import React, { useState, useEffect, useContext } from 'react';
import { fetchAllLanguages } from '../../api.js';
import { AuthContext } from '../../auth';
import { MediumBtn } from '../Buttons/MediumBtn';
import { setUserLanguages } from './../../api.js';


export const LanguageSelection = ({ action }) => {
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


	function submitChange(e) {
		e.preventDefault();
		e.target.style.backgroundColor = 'green';
		const selected = [...document.querySelectorAll('input[type=checkbox]:checked')];
		setUserLanguages(selected.map(({ value }) => value))
			.then(() => e.target.style.backgroundColor = null);
	}

	if (languages) {
		return (
			<div className="profile-language-container">
				<h1 className="text-center text-2xl pt-5 underline font-bold mb-12">Languages</h1>
				<div id="language-selection" className="profile-lang-container">
					{languages.languages.map(language => (
						<div className="language-selection">
							<label className="" key={language.id}>
								<input type="checkbox" className="" id={language.name} value={language.id} />
								<span className="ml-2">{language.name}</span>
							</label>
						</div>
					))}
				</div>
				<div className="personal-info-button mt-16">
					<MediumBtn label="Submit" handleClick={submitChange} />
				</div>
				<img className="profile-info-img" src="/assets/languagesinfo.png"></img>
			</div>
		);
	} else {
		return (
			<></>
		)
	}
};
