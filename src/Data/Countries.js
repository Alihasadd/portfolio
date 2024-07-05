const countries = {
  PK: { year: "2021", scale: 1, phrase: "Ice cream walla" }, //Pakistan
  US: { year: "Every year", scale: 5, phrase: "Yee haw!" }, //United States
  CA: { year: "2022, 2019, 2009", scale: 5, phrase: "Git statusssss" }, //Canada
  BR: { year: "2020", scale: 2, phrase: "a gente" }, //Brazil
  AU: { year: "2019", scale: 1, phrase: "" }, //Australia
  CL: { year: "2023, 2019, 2016, ", scale: 5, phrase: "Weon" }, //Chile
  MX: { year: "2017,2016", scale: 3, phrase: "Weyyy" }, //Mexico
  PR: { year: "2018, 2019,", scale: 3, phrase: "Sato" }, //Puerto Rico
  EC: { year: "2022", scale: 1, phrase: "" }, //Ecuador
  PE: { year: "2024", scale: 2, phrase: "Plop" }, //Peru
  CO: { year: "2018", scale: 1, phrase: "" }, //Colombia
  CR: { year: "2022", scale: 2, phrase: "Pura Video" }, //Costa Rica
  PA: { year: "2017, 2009", scale: 2, phrase: "Buenas" }, //Panama
  UY: { year: "2023, 2020", scale: 2, phrase: "" }, //Uruguay
  PY: { year: "2023", scale: 1, phrase: "" }, //Paraguay
  EG: { year: "2021", scale: 1, phrase: "Mumtaz" }, //Egypt
  AR: { year: "2023, 2019", scale: 1, phrase: "Mumtaz" }, //Argentina
  GB: { year: "Several", scale: 5, phrase: "Init" }, //United Kingdom
  GL: { year: "2022", scale: 1, phrase: "" }, //Greenland
  IS: { year: "2016", scale: 1, phrase: "Foss" }, //Iceland
  ES: { year: "2011", scale: 1, phrase: "Siesta" }, //Spain
  TH: { year: "2017", scale: 1, phrase: "Kap Kun Ka" }, //Thailand
  SG: { year: "2016", scale: 1, phrase: "" }, //Singapore
  CN: { year: "2013", scale: 1, phrase: "Sticky Rice" }, //China
  PT: { year: "2021", scale: 1, phrase: "A gente" }, //Portugal
  DE: { year: "2011", scale: 1, phrase: "Prost" }, //Germany
  SE: { year: "2019", scale: 1, phrase: "Goodnart" }, //Sweden
  NO: { year: "2019", scale: 1, phrase: "Cured Salmon" }, //Norway
  FR: { year: "2019, 2018, 2011", scale: 4, phrase: "Croissant" }, //France
  BE: { year: "2017", scale: 1, phrase: "Sticky Rice" }, //Belgium
  IT: { year: "2022", scale: 1, phrase: "" }, //Italy
  NL: { year: "2011", scale: 1, phrase: "" }, //Netherlands
  CZ: { year: "2011", scale: 1, phrase: "Praha" }, //Czech Republic
  HU: { year: "2017", scale: 1, phrase: "" }, //Hungary
  DK: { year: "2022, 2019", scale: 3, phrase: "" }, //Denmark
  JO: { year: "2018", scale: 1, phrase: "kunafa" }, //Jordan
  IL: { year: "2018", scale: 1, phrase: "Adonai" }, //Israel
  SK: { year: "2011", scale: 1, phrase: "" }, //Slovakia
  JP: { year: "2016", scale: 1, phrase: "Mairimasu" }, //Japan
  HK: { year: "2017", scale: 1, phrase: "" }, //Hong Kong
  H: { year: "2017", scale: 1, phrase: "" }, //Hungary

  SW: { year: "2017", scale: 1, phrase: "Sticky Rice" }, //Switzerland
  



  // "CX": "Christmas Island",
  // "CC": "Cocos (Keeling) Islands",
  // "CO": "Colombia",
  // "KM": "Comoros",
  // "CG": "Congo",
  // "CD": "Congo, The Democratic Republic of the",
  // "CK": "Cook Islands",
  // "CR": "Costa Rica",
  // "CI": "Cote D'Ivoire",
  // "HR": "Croatia",
  // "CU": "Cuba",
  // "CY": "Cyprus",
  // "CZ": "Czech Republic",
  // "DK": "Denmark",
  // "DJ": "Djibouti",
  // "DM": "Dominica",
  // "DO": "Dominican Republic",
  // "EC": "Ecuador",
  // "EG": "Egypt",
  // "SV": "El Salvador",
  // "GQ": "Equatorial Guinea",
  // "ER": "Eritrea",
  // "EE": "Estonia",
   "ET": "Ethiopia",


};

export const countryYears = Object.keys(countries).reduce((acc, key) => {
  acc[key] = countries[key].year;
  return acc;
}, {});

export const countryScales = Object.keys(countries).reduce((acc, key) => {
  acc[key] = countries[key].scale;
  return acc;
}, {});

export const countryPhrase = Object.keys(countries).reduce((acc, key) => {
  acc[key] = countries[key].phrase;
  return acc;
}, {});
