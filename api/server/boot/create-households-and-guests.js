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
				{ firstName: 'Julene', lastName: 'Horsager' },
				{ firstName: 'Chadwick', lastName: 'Horsager' },
				{ firstName: 'Brent', lastName: 'Horsager' }
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
		// {
		// 	name: '',
		// 	head: 'Papi',
		// 	guests: [
		// 		{ firstName: 'Papi', lastName: '' },
		// 		{ firstName: 'Grami', lastName: '' }
		// 	]
		// },
		{
			name: 'Horsager',
			head: 'Jocelyn',
			guests: [
				{ firstName: 'Jocelyn', lastName: 'Horsager' }
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
				// { firstName: '', lastName: 'Keller' }
			]
		},
		// {
		// 	name: 'Sauer',
		// 	head: '',
		// 	guests: [
		// 		{ firstName: '', lastName: 'Sauer' },
		// 		{ firstName: 'Shannon', lastName: 'Sauer' }
		// 	]
		// },
		// {
		// 	name: 'Nesmith',
		// 	head: '',
		// 	guests: [
		// 		{ firstName: '', lastName: 'Nesmith' },
		// 		{ firstName: '', lastName: 'Nesmith' }
		// 	]
		// },
		{
			name: 'Horsager',
			head: 'Joel',
			guests: [
				{ firstName: 'Joel', lastName: 'Horsager' },
				{ firstName: 'Susan', lastName: 'Horsager' },
				{ firstName: 'Coco', lastName: 'Biro' }
			]
		},
		// {
		// 	name: 'Marquez',
		// 	head: '',
		// 	guests: [
		// 		{ firstName: '', lastName: 'Marquez' },
		// 		{ firstName: '', lastName: 'Marquez' },
		// 		{ firstName: '', lastName: 'Marquez' }
		// 	]
		// },
		// {
		// 	name: 'Ganish',
		// 	head: '',
		// 	guests: [
		// 		{ firstName: '', lastName: 'Ganish' },
		// 		{ firstName: '', lastName: 'Wilson' }
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
				{ firstName: 'Rashida', lastName: 'Pinnock' },
				{ firstName: 'Kid1', lastName: 'Pinnock' },
				{ firstName: 'Kid2', lastName: 'Pinnock' },
				{ firstName: 'Kid3', lastName: 'Pinnock' }
			]
		},
		{
			name: 'Parker',
			head: 'Chase',
			guests: [
				{ firstName: 'Chase', lastName: 'Parker' },
				{ firstName: 'Danica', lastName: 'Parker' }
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
				async.each(householdData.guests, (guest, callback) => {
					// Check if guest already exists for household, else create new guest.
					household.guests.findOne({ where: { firstName: guest.firstName, lastName: guest.lastName } }, (error, foundGuest) => {
						if(error) return callback(error);
						if(guest) return callback(null, guest);
						return household.guests.create(guest, callback);
					})
				}, callback);
			}
		], callback);
	}, error => {
		if(error) return callback(error);
		console.log('Successfully imported all households and guests.');
		return callback();
	});

};
