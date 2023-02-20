'use strict';

const pageMainToolbar = require('../pages/page-main-toolbar');
const pageDestinations = require('../pages/page-destinations');

module.exports = {

    'step 1 - Login': (browser) => {
        browser
            // Login to CRS
            .loginToCRS()
    },

    'step 2 - Create new destination': (browser) => {
        browser
            // Click on navigation menu
            .waitAndClickByCss(pageMainToolbar.selectors.navigationToolbar.moduleDisplay)
            // Add value in the search input
            .waitAndSetValueByCss(pageMainToolbar.selectors.navigationToolbar.searchInput, 'Destinations')
            // Select destinations from the list
            .waitAndClickByCss(pageMainToolbar.selectors.navigationToolbar.destinations)
            // Click on create new destination button
            .waitAndClickByCss(pageDestinations.selectors.toolbar.createNewDestinationButton)

            .waitAndClickByCss(pageDestinations.selectors.newDestination.activeCheckbox)
            .waitAndClickByCss(pageDestinations.selectors.newDestination.showOnWebCheckbox)
            .waitAndClickByCss(pageDestinations.selectors.newDestination.fatherCheckbox)
            .waitAndClickByCss(pageDestinations.selectors.newDestination.chargeTaxOnInfantCheckbox)

            // .waitAndClickByCss(pageMainToolbar.selectors.navigationToolbar.destinations)

            // .pause()
    },

};