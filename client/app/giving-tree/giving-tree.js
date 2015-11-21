(function () {

	'use strict';

	angular.module('zebraTestApp')
		.config(function ($stateProvider) {
			$stateProvider
				.state('giving-tree', {
					url: '/giving-tree',
					views: {
						'': {
							templateUrl: 'app/giving-tree/giving-tree.html',
							controller: 'GivingTreeCtrl'
						},
						'navbar@giving-tree': {
							templateUrl: 'components/navbar/navbar.html',
							controller: 'NavbarCtrl'
						},
						'header@giving-tree': {
							templateUrl: 'app/giving-tree/header/header.html',
							controller: 'GivingTreeCtrl'
						},
						'story@giving-tree': {
							templateUrl: 'app/giving-tree/story/story.html',
							controller: 'GivingTreeCtrl'
						},
						'problems@giving-tree': {
							templateUrl: 'app/giving-tree/problems/problems.html',
							controller: 'GivingTreeCtrl'
						},
						'solutions@giving-tree': {
							templateUrl: 'app/giving-tree/solutions/solutions.html',
							controller: 'GivingTreeCtrl'
						},
						'gifts@giving-tree': {
							templateUrl: 'app/giving-tree/gifts/gifts.html',
							controller: 'GivingTreeCtrl'
						},
						'form@giving-tree': {
							templateUrl: 'app/giving-tree/form/form.html',
							controller: 'GivingTreeCtrl'
						},
						'footer@giving-tree': {
							templateUrl: 'components/footer/footer.html',
							controller: 'FooterCtrl'
						}
					}

				});
		});
// Call the IFFE function
}());