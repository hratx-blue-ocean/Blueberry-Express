import React, { useState, useEffect, useContext } from 'react';
import { fetchAllLanguages } from '../../api.js';
import { AuthContext } from '../../auth';
import { SmallBtn } from '../Buttons/SmallBtn';
import { addUserLanguage } from './../../api.js';

export const LanguageSelection = () => {
	const [languages, setLanguages] = useState(null);
	const [chosen, setChosen] = useState([]);
	const context = useContext(AuthContext);

	useEffect(() => {
		fetchAllLanguages()
		.then(data => {
			setLanguages(data);
		})
		.catch(err => {
			console.error(err);
		})
	}, [])

	useEffect(() => {
		setChosen(context.user.languages);
	}, [])


  useEffect(() => {
		window.onLoad(console.log('hey'))
		if (chosen.length) {
			chosen.forEach((lang) => {
		    // document.getElementById(lang.name).checked = true;
				console.log('name', lang.name)
				console.log(document.getElementById(lang.name));
			})
		}
	}, [chosen])

	function submitChange(e) {
			e.preventDefault();
			e.target.style.backgroundColor = 'green';
			var selected = [...document.querySelectorAll('input[type=checkbox]:checked')]
			selected.forEach((item) => {
				addUserLanguage(item.value)
				.catch(err => {
					console.log(err);
				})
			})
	}

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
					<SmallBtn label="submit" handleClick={submitChange}/>
				</div>
			</div>
		);
	} else {
		return (
			<></>
		)
	}
};