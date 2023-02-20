module.exports = {

  selectors: {

    toolbar: {
      newFlight: '#list > form > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td.paddr11 > table > tbody > tr > td:nth-child(7) > img',
    },

    searchBar: {
      searchInput: '[name=sestring]',
    },

    newFlight: {
      activeCheckbox: '#fltACTIVE0',
      showOnWebCheckbox: '#fltShowOnweb0',
      showToAgentsCheckbox: '#fltShowToAgents0',
      showOnAeroCRSNetworkCheckbox: '#fltShowonAN0',
      serviceLoadList: '#fltacid0',
      serviceLoad_A320: '[id="fltacid0"] option[value="176515"]',
      flightNumberInput: '#fltnum0',
      departureDateInput: '#fltdatetimestd0',
      arrivalDateInput: '#fltdatetimesta0',
      flightTypeList: '#flttype',
      flightType_From_To: '[id="flttype"] option[value="1"]',
      flightType_From_Via_To: '[id="flttype"] option[value="2"]',
      flightType_Multileg: '[id="flttype"] option[value="3"]',
      fromDestination: '#from_dst',
      fromDestination_AMS: '[id="from_dst"] option[value="5960"]',
      toDestination: '#to_dst',
      toDestination_TLV: '[id="to_dst"] option[value="5017"]',
      STD: '#from_std',
      STA: '#to_sta',
      fromTerminal: '#flt_from_terminal',
      toTerminal: '#flt_to_terminal',
      saveButton: '#div_flt > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td.button_green > a > b',
    },
  }
};