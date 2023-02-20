'use strict';

const pageReservations = require('../pages/page-reservations');
let NWTools = require('nightwatch-tools');
const moment = require("moment");
let randomString = NWTools.randomString(3,'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
let randomTerminal = NWTools.randomString(1,'ABCDEFG');
let randomNumber = NWTools.randomString(3,'1234567890');
let randomFlightNumber = `${randomString}${randomNumber}`;
// Date selection
let selectedDate = moment().format('DD/MM/YYYY');

module.exports = {

    'step 1 - Login': (browser) => {
        browser
            // Login to CRS
            .loginToCRS()
            // Add text in the search input
            .waitAndSetValueByCss(pageReservations.selectors.searchBar.searchInput, 'SCF 140223')
            // Click on search button
            .waitAndClickOnText('Search')
            // New flight button
            .waitAndClickByCss(pageReservations.selectors.toolbar.newFlight)
            // Active checkbox
            .waitAndClickByCss(pageReservations.selectors.newFlight.activeCheckbox)
            // Show on web checkbox
            .waitAndClickByCss(pageReservations.selectors.newFlight.showOnWebCheckbox)
            // Show to agents checkbox
            .waitAndClickByCss(pageReservations.selectors.newFlight.showToAgentsCheckbox)
            // Show on AeroCRS network checkbox
            .waitAndClickByCss(pageReservations.selectors.newFlight.showOnAeroCRSNetworkCheckbox)
            // Open service load list
            .waitAndClickByCss(pageReservations.selectors.newFlight.serviceLoadList)
            // Select flight A320
            .waitAndClickByCss(pageReservations.selectors.newFlight.serviceLoad_A320)
            // Add flight number
            .waitAndSetValueByCss(pageReservations.selectors.newFlight.flightNumberInput, randomFlightNumber)
            // Set departure date
            .waitAndSetValueByCss(pageReservations.selectors.newFlight.departureDateInput, selectedDate)
            // Set arrival date
            .waitAndSetValueByCss(pageReservations.selectors.newFlight.arrivalDateInput, selectedDate)
            // Click on flight type list
            .waitAndClickByCss(pageReservations.selectors.newFlight.flightTypeList)
            // Select "From to" type
            .waitAndClickByCss(pageReservations.selectors.newFlight.flightType_From_To)
            // Click on "From destination" list
            .waitAndClickByCss(pageReservations.selectors.newFlight.fromDestination)
            // Select AMS
            .waitAndClickByCss(pageReservations.selectors.newFlight.fromDestination_AMS)
            // Click on "To destination" list
            .waitAndClickByCss(pageReservations.selectors.newFlight.toDestination)
            // Select TLV
            .waitAndClickByCss(pageReservations.selectors.newFlight.toDestination_TLV)
            // Add time to STD
            .waitAndSetValueByCss(pageReservations.selectors.newFlight.STD, '14:00')
            // Add time to STA
            .waitAndSetValueByCss(pageReservations.selectors.newFlight.STA, '16:00')
            // Add "From terminal"
            .waitAndSetValueByCss(pageReservations.selectors.newFlight.fromTerminal, randomTerminal)
            // Add "To terminal"
            .waitAndSetValueByCss(pageReservations.selectors.newFlight.toTerminal, randomTerminal)

            // Click on save button
            // .waitAndClickByCss(pageReservations.selectors.newFlight.saveButton)
            // browser.pause()
    },

};