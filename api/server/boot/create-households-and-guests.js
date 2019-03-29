'use strict';

const async = require('async');

module.exports = function(server, callback) {

	const Household = server.models.Household;

	const households = [
		{
			name: 'Horsager',
			head: 'Paul',
			guests: [
				{ firstName: 'Paul', lastName: 'Horsager' },
				{ firstName: 'Janna', lastName: 'Horsager' },
				{ firstName: 'Chadwick', lastName: 'Horsager' },
				{ firstName: 'Brent', lastName: 'Horsager' },
				{ firstName: 'Jocelyn', lastName: 'Horsager' },
				{ firstName: 'Nate', lastName: 'Millen' }
			]
		},
		{
			name: 'Horsager',
			head: 'Zack',
			guests: [
				{ firstName: 'Zack', lastName: 'Horsager' }
			]
		},
		{
			name: 'Lee',
			head: 'Heidi',
			guests: [
				{ firstName: 'Heidi', lastName: 'Lee' }
			]
		},
		{
			name: 'Chavez',
			head: 'Angel',
			guests: [
				{ firstName: 'Angel', lastName: 'Chavez' },
				{ firstName: 'Ruth', lastName: 'Chavez' }
			]
		},
		{
			name: 'Horsager',
			head: 'Julene',
			guests: [
				{ firstName: 'Julene', lastName: 'Horsager' }
			]
		},
		{
			name: 'Warejko',
			head: 'Jeff',
			guests: [
				{ firstName: 'Jeff', lastName: 'Warejko' },
				{ firstName: 'Terri', lastName: 'Warejko' },
				{ firstName: 'Taylor', lastName: 'Warejko' },
				{ firstName: 'Caleb', lastName: 'Warejko' }
			]
		},
		{
			name: 'Keller',
			head: 'Tim',
			guests: [
				{ firstName: 'Tim', lastName: 'Keller' },
				{ firstName: 'Samantha', lastName: 'Keller' }
			]
		},
		{
			name: 'Sauer',
			head: 'Ryan',
			guests: [
				{ firstName: 'Ryan', lastName: 'Sauers' },
				{ firstName: 'Shannon', lastName: 'Sauers' },
				{ firstName: 'Jack', lastName: 'Sauers' }
			]
		},
		{
			name: 'Nesmith',
			head: 'Bob',
			guests: [
				{ firstName: 'Bob', lastName: 'Nesmith' },
				{ firstName: 'Vimy', lastName: 'Nesmith' }
			]
		},
		{
			name: 'Horsager',
			head: 'Joel',
			guests: [
				{ firstName: 'Joel', lastName: 'Horsager' },
				{ firstName: 'Susan', lastName: 'Horsager' },
				{ firstName: 'Coco', lastName: 'Horsager' }
			]
		},
		// {
		// 	name: 'Marquez',
		// 	head: '',
		// 	guests: [
		// 		{ firstName: '', lastName: 'Marquez' },
		// 		{ firstName: 'Teresa', lastName: 'Marquez' },
		// 		{ firstName: 'Anneliese', lastName: 'Marquez' }
		// 	]
		// },
		// {
		// 	name: 'Ganish',
		// 	head: 'Gilad',
		// 	guests: [
		// 		{ firstName: 'Gilad', lastName: 'Ganish' },
		// 		{ firstName: 'Holly', lastName: 'Wilson' },
		// 		{ firstName: 'Maddi', lastName: 'Wilson' }
		// 	]
		// },
		{
			name: 'Banks',
			head: 'Sean',
			guests: [
				{ firstName: 'Sean', lastName: 'Banks' },
				{ firstName: 'Emily', lastName: 'Banks' }
			]
		},
		{
			name: 'Pinnock',
			head: 'Emil',
			guests: [
				{ firstName: 'Emil', lastName: 'Pinnock' },
				{ firstName: 'Rashidah', lastName: 'Pinnock' },
				{ firstName: 'Sanaa', lastName: 'Pinnock' },
				{ firstName: 'Masen', lastName: 'Pinnock' },
				{ firstName: 'Titus', lastName: 'Pinnock' }
			]
		},
		{
			name: 'Parker',
			head: 'Chase',
			guests: [
				{ firstName: 'Chase', lastName: 'Parker' },
				{ firstName: 'Danica', lastName: 'Parker' }
			]
		},
		{
			name: 'McCullough',
			head: 'Stephen',
			guests: [
				{ firstName: 'Stephen', lastName: 'McCullough' },
				{ firstName: 'Hilary', lastName: 'McCullough' }
			]
		},
		{
			name: 'Fleischli',
			head: 'John',
			guests: [
				{ firstName: 'John', lastName: 'Fleischli' },
				{ firstName: 'Taylor', lastName: 'Fleischli' }
			]
		},
		{
			name: 'Hollister',
			head: 'Mackenzie',
			guests: [
				{ firstName: 'Mackenzie', lastName: 'Hollister' }
			]
		},
		{
			name: 'Hanna',
			head: 'Morgan',
			guests: [
				{ firstName: 'Morgan', lastName: 'Hanna' }
			]
		},
		{
			name: 'Hamada',
			head: 'Elizabeth',
			guests: [
				{ firstName: 'Elizabeth', lastName: 'Elizabeth' }
			]
		},
		// {
		// 	name: 'Ricci',
		// 	head: 'Diane',
		// 	guests: [
		// 		{ firstName: 'Diane', lastName: 'Ricci' },
		// 		{ firstName: 'Jeanette', lastName: 'Ricci' },
		// 		{ firstName: 'Lizzy', lastName: 'Ricci' }
		// 	]
		// },
		{
			name: 'Shaw',
			head: 'Elliott',
			guests: [
				{ firstName: 'Elliott', lastName: 'Shaw' },

			]
		},
		{
			name: 'Stockdale',
			head: 'Geneva',
			guests: [
				{ firstName: 'Geneva', lastName: 'Stockdale' }
			]
		},
		{
			name: 'Kerins',
			head: 'Mary Lou',
			guests: [
				{ firstName: 'Mary Lou', lastName: 'Kerins' }
			]
		},
		{
			name: 'Ercoli',
			head: 'Robert',
			guests: [
				{ firstName: 'Robert', lastName: 'Ercoli' }
			]
		},
		{
			name: 'Verstegen',
			head: 'Jonathan',
			guests: [
				{ firstName: 'Jonathan', lastName: 'Verstegen' },
				{ firstName: 'Melissa', lastName: 'Verstegen' }
			]
		},
		{
			name: 'Revetta',
			head: 'Elise',
			guests: [
				{ firstName: 'Elise', lastName: 'Revetta' }
			]
		},
		{
			name: 'Hawkins',
			head: 'Brandon',
			guests: [
				{ firstName: 'Brandon', lastName: 'Hawkins' },
			]
		},
		{
			name: 'Nelson',
			head: 'Jesse',
			guests: [
				{ firstName: 'Jesse', lastName: 'Nelson' }
			]
		},
		{
			name: 'Donovan',
			head: 'Emily',
			guests: [
				{ firstName: 'Emily', lastName: 'Donovan' }
			]
		},
		{
			name: 'Hardaway',
			head: 'Dante',
			guests: [
				{ firstName: 'Dante', lastName: 'Hardaway' },
				{ firstName: 'Nicole', lastName: 'Hardaway' }
			]
		},
		// {
		// 	name: 'Georgino',
		// 	head: '',
		// 	guests: [
		// 		{ firstName: '', lastName: 'Georgino' },
		// 		{ firstName: 'Perla', lastName: 'Georgino' },
		// 		{ firstName: 'Derek', lastName: 'Georgino' }
		// 	]
		// },
		{
			name: 'Zemke',
			head: 'Chris',
			guests: [
				{ firstName: 'Chris', lastName: 'Zemke' },
				{ firstName: 'Heather', lastName: 'Zemke' }
			]
		},
		{
			name: 'Priestly',
			head: 'Ashley',
			guests: [
				{ firstName: 'Ashley', lastName: 'Priestley' }
			]
		},
		{
			name: 'Cheikha',
			head: 'Fadi',
			guests: [
				{ firstName: 'Fadi', lastName: 'Cheikha' },
				{ firstName: 'Kim', lastName: 'Cheikha' },
				{ firstName: 'Julia', lastName: 'Cheikha' },
				{ firstName: 'Jake', lastName: 'Cheikha' },
				{ firstName: 'Jaden', lastName: 'Cheikha' },
				{ firstName: 'Jacquie', lastName: 'Cheikha' }
			]
		},
		{
			name: 'Barragan',
			head: 'Brandon',
			guests: [
				{ firstName: 'Brandon', lastName: 'Barragan' },
				{ firstName: 'Courtney', lastName: 'Barragan' }
			]
		},
		{
			name: 'Morgosh',
			head: 'Scott',
			guests: [
				{ firstName: 'Scott', lastName: 'Morgosh' },
				{ firstName: 'Tamara', lastName: 'Morgosh' }
			]
		},
		{
			name: 'Herrera',
			head: 'Christian',
			guests: [
				{ firstName: 'Christian', lastName: 'Herrera' },
				{ firstName: 'Tracy', lastName: 'Herrera' }
			]
		},
		{
			name: 'Warejko',
			head: 'James',
			guests: [
				{ firstName: 'James', lastName: 'Warejko' },
				{ firstName: 'Sheila', lastName: 'Warejko' }
			]
		},
		{
			name: 'Ludolph',
			head: 'Bob',
			guests: [
				{ firstName: 'Bob', lastName: 'Ludolph' },
				{ firstName: 'Betty', lastName: 'Ludolph' },
				{ firstName: 'Randy', lastName: 'Ludolph' }
			]
		},
		{
			name: 'Johnson',
			head: 'Curt',
			guests: [
				{ firstName: 'Curt', lastName: 'Johnson' },
				{ firstName: 'Renee', lastName: 'Johnson' },
				{ firstName: 'Justina', lastName: 'Johnson' }
			]
		},
		{
			name: 'Heuler',
			head: 'Wes',
			guests: [
				{ firstName: 'Wesley', lastName: 'Heuler' },
				{ firstName: 'Nicole', lastName: 'Heuler' }
			]
		},
		{
			name: 'Fredrich',
			head: 'Ryan',
			guests: [
				{ firstName: 'Ryan', lastName: 'Fredrich' },
				{ firstName: 'Mary', lastName: 'Fredrich' }
			]
		},
		{
			name: 'Marquez',
			head: 'Stephen',
			guests: [
				{ firstName: 'Stephen', lastName: 'Marquez' },
				{ firstName: 'Michelle', lastName: 'Marquez' }
			]
		},
		{
			name: 'Snow',
			head: 'Doug',
			guests: [
				{ firstName: 'Doug', lastName: 'Snow' },
				{ firstName: 'Janet', lastName: 'Snow' },
				{ firstName: 'Brett', lastName: 'Snow' }
			]
		},
		{
			name: 'Snow',
			head: 'Dougie',
			guests: [
				{ firstName: 'Doug', lastName: 'Snow' },
				{ firstName: 'Lynita', lastName: 'Snow' }
			]
		},
		// {
		// 	name: 'Moreno',
		// 	head: '',
		// 	guests: [
		// 		{ firstName: '', lastName: 'Moreno' },
		// 		{ firstName: 'Amy', lastName: 'Moreno' }
		// 	]
		// },
		{
			name: 'Cantrell',
			head: 'Thomas',
			guests: [
				{ firstName: 'Thomas', lastName: 'Cantrell' },
				{ firstName: 'Madison', lastName: 'Cantrell' }
			]
		},
		{
			name: 'Engler',
			head: 'Bob',
			guests: [
				{ firstName: 'Bob', lastName: 'Engler' },
				{ firstName: 'Kim', lastName: 'Engler' },
				{ firstName: 'Gabby', lastName: 'Engler' }
			]
		},
		{
			name: 'Engler',
			head: 'Bryan',
			guests: [
				{ firstName: 'Bryan', lastName: 'Engler' },
				{ firstName: 'Lizandy', lastName: 'Engler' }
			]
		},
		{
			name: 'Balmaseda',
			head: 'Guillermo',
			guests: [
				{ firstName: 'Guillermo', lastName: 'Balmaseda' },
				{ firstName: 'Pam', lastName: 'Balmaseda' }
			]
		},
		{
			name: 'Gould',
			head: 'Jesse',
			guests: [
				{ firstName: 'Jesse', lastName: 'Gould' },
				{ firstName: 'Kristina', lastName: 'Gould' },
				{ firstName: 'Kastle', lastName: 'Gould' }
			]
		},
		{
			name: 'Wardwell',
			head: 'Winston',
			guests: [
				{ firstName: 'Winston', lastName: 'Wardwell' },
				{ firstName: 'Kristen', lastName: 'Wardwell' }
			]
		},
		{
			name: 'Petty',
			head: 'Brad',
			guests: [
				{ firstName: 'Brad', lastName: 'Petty' },
				{ firstName: 'Chelsey', lastName: 'Petty' }
			]
		},
		{
			name: 'Garcia',
			head: 'John',
			guests: [
				{ firstName: 'John', lastName: 'Garcia' },
				{ firstName: 'Lauren', lastName: 'Garcia' }
			]
		},
		{
			name: 'Gervais',
			head: 'Tommy',
			guests: [
				{ firstName: 'Tommy', lastName: 'Gervais' },
				{ firstName: 'Lauren', lastName: 'Gervais' }
			]
		},
		{
			name: 'Colón',
			head: 'Mike',
			guests: [
				{ firstName: 'Mike', lastName: 'Colón' },
				{ firstName: 'Julie', lastName: 'Colón' }
			]
		},
		{
			name: 'Mossè',
			head: 'David',
			guests: [
				{ firstName: 'David', lastName: 'Mossè' },
				{ firstName: 'Kelsey', lastName: 'Mossè' }
			]
		},
		{
			name: 'Verstegen',
			head: 'Stephen',
			guests: [
				{ firstName: 'Stephen', lastName: 'Verstegen' }
			]
		},
		{
			name: 'Yang',
			head: 'Mason',
			guests: [
				{ firstName: 'Mason', lastName: 'Yang' }
			]
		},
		{
			name: 'Bonstrom',
			head: 'James',
			guests: [
				{ firstName: 'James', lastName: 'Bonstrom' }
			]
		},
		{
			name: 'Self',
			head: 'Sue',
			guests: [
				{ firstName: 'Sue', lastName: 'Self' },
				{ firstName: 'Aaron', lastName: 'Self' },
				{ firstName: 'David', lastName: 'Self' }
			]
		},
		{
			name: 'Forstel',
			head: 'Hannah',
			guests: [
				{ firstName: 'Hannah', lastName: 'Forstel' }
			]
		},
		{
			name: 'Madden',
			head: 'Taylor',
			guests: [
				{ firstName: 'Taylor', lastName: 'Madden' },
				{ firstName: 'Rebecca', lastName: 'Madden' }
			]
		},
		{
			name: 'Furnari',
			head: 'Jacob',
			guests: [
				{ firstName: 'Jacob', lastName: 'Furnari' },
				{ firstName: 'Cassie', lastName: 'Furnari' }
			]
		}
	];

	async.each(households, (householdData, callback) => {
		async.waterfall([
			(callback) => {
				// Check if matching household already exists, else create new household.
				Household.findOne({ where: { name: householdData.name, head: householdData.head } }, (error, foundHousehold) => {
					if(error) return callback(error);
					if(foundHousehold) return callback(null, foundHousehold);
					return Household.create({name: householdData.name, head: householdData.head}, callback);
				})
			}, (household, callback) => {
				console.log('Household: ', household);
				async.eachLimit(householdData.guests, 5, (guest, callback) => {
					// Check if guest already exists for household, else create new guest.
					household.guests.findOne({ where: { firstName: guest.firstName, lastName: guest.lastName } }, (error, foundGuest) => {
						console.log(guest, foundGuest);
						if(error) return callback(error);
						if(foundGuest) return callback(null, foundGuest);
						return household.guests.create(guest, (error, newGuest) => {
							if(error) return callback(error);
							console.log('New Guest: ', newGuest)
							return callback(null, newGuest);
						});
					});
				}, callback);
			}
		], callback);
	}, error => {
		if(error) return callback(error);
		console.log('Successfully imported all households and guests.');
		return callback();
	});

};
