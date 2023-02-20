module.exports = {

  selectors: {

    toolbar: {
      createNewDestinationButton: '#list > form > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td.paddr11 > table > tbody > tr > td:nth-child(5) > img',
      filterButton: '#list > form > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td.paddr11 > table > tbody > tr > td:nth-child(3) > img',
    },

    newDestination: {
      activeCheckbox: '#dstACTIVE0',
      showOnWebCheckbox: '#dstShowOnWeb0',
      fatherCheckbox: '#dstISmain0',
      chargeTaxOnInfantCheckbox: '#dstChargeTaxOnInf0',
      codeInput: '#dstSubCODE0',
      nameInput: '#dstName0',
      countryList: '#dstcoid0',
      country_Austria: '[id="dstcoid0"] option[value="15"]',
      latInput: '#dstLat0',
      longInput: '#dstLong0',
      timezoneList: '#dstGmtid0',
      timezone_Austria: '[id="dstGmtid0"] option[value="15"]',
      saveButton: '#div_flt > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td.button_green > a > b',
      // Sub destination
      fatherCodeCheckbox: '#dstCODE0',
      fatherDestinationList: '#dstSubFatherID0',
      allowStripChangeCheckbox: '#dstAllowstripchange0',
      // CRS availability
      showCheckbox: '#dstShowOnCRSavl0',
      otherInput: '#dstavlorder0',
      colorButton: '#dstcolor0',
      accommodationMandatoryCheckbox: '#dstaccmust0',
      // Travel requirements
      baggageAllowanceInput: '#dstBGG0',
      MinBookingIntervalInput: '#dstMINhourbook0',
      webMinBookingIntervalInput: '#dstWebMinBook0',
      BaggageDropInput: '#DSTbaggageDropTime0',
      checkinTimeInput: '#dstCheckintime0',
      minPassengerInput: '#dstMinPaxBooking0',
      barCodeVersionInput: '#DSTBCBPversion0',
      gateClosingInput: '#DSTgateCloseTime0',
      onlineCheckinOpenInput: '#dstOnlineCheckinOpen0',
      onlineCheckinCloseInput: '#dstOnlineCheckinClose0',
      boardingTimeInput: '#DSTboardingtime0',
      airportControlInput: '#DSTmoveToAirpotControl0',
      blockOnlineSeatSelectionCheckbox: '#DSTblockSeatSelection0',
      // GDS/LDS Connection
      destinationList: '#dstapidstid0',
      destination_Amman: '[id="dstapidstid0"] option[value="245"]',
      // PNL/ADL
      PNLTimingInput: '#dstpnltiming0',
      ADLTimingInput: '#dstadltiming0',
      PALTimingInput: '#dstpaltiming0',
      sendPAL_CALCheckbox: '#DSTsendPal0',
      ADLContinuousCheckbox: '#DSTsendAutoAdl0',
      useICAOCodeWithFlightNumberCheckbox: '#dstpnlforceICAOcode0',
      sendCrewMsgCheckbox: '#DSTsendcrew0',
      PAL_ADLEmailInput: '#dstpnlemailaddress0',
      SITAAddressInput: '#dstpnladdress0',
      HTTPAddressInput: '#DSTpnlhttpaddress0',
      APL_CAL_SITAAddressInput: '#DSTpalAddress0',
      APL_CAL_EmailInput: '#DSTpalEmailAddress0',
      // Movement tracking
      movementTrackingEmailInput: '#dstMovementEmailAddress0',
      templateList: '#dstMovementFltpid0',
      template_Manifest: '[id="dstMovementFltpid0"] option[value="454"]',
      // Sightseeing setup
      sightseeingCheckbox: '#dstIsSightseeing0',
      returnDestinationList: '#dstSightseeingReturnDST0',
      returnDestination_Paris: '[id="dstSightseeingReturnDST0"] option[value="5035"]',

    }

  }
};