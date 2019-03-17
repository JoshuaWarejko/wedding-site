'use strict';

module.exports = function(Household) {

	Household.observe('before save', (ctx, callback) => {
		const instance = ctx.isNewInstance ? ctx.instance : ctx.currentInstance;
		const data = ctx.data;
		if(!ctx.isNewInstance) return callback();
		// Prevent duplicate householdId, firstName, and lastName combos from being duplicated.
		Household.findOne({where: { name: instance.name, head: instance.head }}, (error, household) => {
			const err = new Error('There already exists a household with matching name and head.');
			err.status = 400;
			if(error || household) return callback(error || err);
			return callback();
		})
	});

};
