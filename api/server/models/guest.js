'use strict';

module.exports = function(Guest) {

	Guest.observe('before save', (ctx, callback) => {
		const instance = ctx.isNewInstance ? ctx.instance : ctx.currentInstance;
		const data = ctx.data;
		if(!ctx.isNewInstance) return callback();
		// Prevent duplicate householdId, firstName, and lastName combos from being duplicated.
		Guest.findOne({where: { householdId: instance.householdId, firstName: instance.firstName, lastName: instance.lastName }}, (error, guest) => {
			const err = new Error('There already exists a guest for the household with matching first and last names.');
			err.status = 400;
			if(error || guest) return callback(error || err);
			return callback();
		})
	});

};
