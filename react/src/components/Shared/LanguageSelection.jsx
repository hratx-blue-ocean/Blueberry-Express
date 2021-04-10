import React, { useState, useEffect, useContext } from 'react';
import { fetchAllLanguages } from '../../api.js';
import { AuthContext } from '../../auth';
import { MediumBtn } from '../Buttons/MediumBtn';
import { setUserLanguages } from './../../api.js';

export const LanguageSelection = () => {
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
				<div id="language-selection" className="profile-lang-container">
				<h1 className="text-center text-2xl pt-5 underline font-bold">Languages</h1>
					{languages.languages.map(language => (
						<label className="" key={language.id}>
							<input type="checkbox" className="" id={language.name} value={language.id} />
							<span className="">{language.name}</span>
						</label>
					))}
					<div className="">
						<MediumBtn label="Submit" handleClick={submitChange} />
					</div>
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


// <div id="language-selection" className="grid ml-5 grid-cols-3 p-10">
			// 	{languages.languages.map( language => (
			// 		<label className="inline-flex items-center mt-3" key={language.id}>
			// 			<input type="checkbox" className="h-5 w-5 text-blue-600" id={language.name} value={language.id} />
			// 			<span className="ml-2 text-black">{language.name}</span>
			// 		</label>
			// 	))}
			// 	<div className="absolute bottom-0 right-0">
			// 		<SmallBtn label="submit" handleClick={submitChange}/>
			// 	</div>
			// </div>