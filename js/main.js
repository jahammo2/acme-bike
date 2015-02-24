(function() {

	var app = angular.module('bike', []);

	app.controller('storeCtrl', function() {

		var self = this;

		self.showPromo = false;
		self.showAcc = false;

		self.products = [
		{
			name: 'bike',
			price: '$$$',
			accessories: [{
				name: 'handles',
				price: 99
			}, {
				name: 'seat',
				price: 60
			}]
		}
		];

		self.newBike = function(named, priced, partName, partPrice) {
			self.products.push({
				name: named || 'edit bike',
				price: priced || 'edit price',
				accessories: [{
	                name:  partName || 'add part',
	                price: partPrice || 'add price'
	            }]
			});
		}

		self.switchToPromo = function () {
			self.showPromo = true;
			// for (var i = self.parts.length - 1; i >= 0; i--) {
			// 	console.log(self.parts[i])
			// 	document.querySelector('.promo-bikes').appendChild(self.parts[i])
			// };
		}

		self.switchToEdit = function () {
			self.showPromo = false;
		}

		self.appendAcc = function () {
			self.showAcc = true;
		}

		self.hideAcc = function (named, priced) {
			self.showAcc = false;
		}

	})

})();

