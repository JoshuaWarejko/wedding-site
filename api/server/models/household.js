'use strict';

const async = require('async');

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

	Household.prototype.submitRsvp = function(householdData, callback) {
		const self = this;
		const dataError = new Error('Household data and guest data required to submit rsvp.');
		dataError.status = 400;
		if(!householdData || !householdData.guests || householdData.guests.length === 0) return callback(dataError);
		return async.waterfall([
			(callback) => {
				self.updateAttributes({ stayingInRpv: householdData.stayingInRpv, stayingLocation: householdData.stayingLocation }, callback);
			}, (updatedHousehold, callback) => {
				async.each(householdData.guests, (guest, callback) => {
					guest.updateAttributes({foodChoice: guest.foodChoice, accept: guest.accept}, callback);
				}, callback);
			}
		], callback);
	}

};
