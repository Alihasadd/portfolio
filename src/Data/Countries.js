const countries = {
  PK: { year: "2021", scale: 60, phrase: "Ice cream walla" },
  US: { year: "Every year", scale: 100, phrase: "Yee haw!" },
  CA: { year: "2022, 2019, 2009", scale: 50, phrase: "Git statusssss" },
  BR: { year: "2020", scale: 30, phrase: "" },
  AU: { year: "2019", scale: 20, phrase: "Sorry, eh?" },
  CL: { year: "2023, 2019, 2016, ", scale: 90, phrase: "Weon" },
  MX: { year: "2017,2016", scale: 50, phrase: "Weyyy" },
  PR: { year: "2018, 2019,", scale: 50, phrase: "Sato" },
  EC: { year: "2022", scale: 30, phrase: "" },
  PE: { year: "2024", scale: 30, phrase: "Plop" },
  CO: { year: "2018", scale: 30, phrase: "" },
  CR: { year: "2022", scale: 30, phrase: "Pura Video" },
  PA: { year: "2017, 2009", scale: 50, phrase: "" },
  UY: { year: "2023, 2020", scale: 50, phrase: "" }, //Not found
  PY: { year: "2023", scale: 30, phrase: "" },
  EG: { year: "2021", scale: 30, phrase: "Mumtaz" },
  AR: { year: "2023, 2019", scale: 30, phrase: "Mumtaz" },
  GB: { year: "Several", scale: 100, phrase: "Init" },
  GL: { year: "2022", scale: 30, phrase: "" },
  IS: { year: "2016", scale: 30, phrase: "" },
  ES: { year: "2011", scale: 30, phrase: "" }, //Spain
  TH: { year: "2017", scale: 30, phrase: "" }, //Thailand
  SG: { year: "2016", scale: 30, phrase: "" }, //Singapore
  CN: { year: "2013", scale: 30, phrase: "Sticky Rice" }, //China
  PT: { year: "2021", scale: 30, phrase: "A gente" }, //Portugal
  DE: { year: "2011", scale: 30, phrase: "" }, //Germany
  SE: { year: "2019", scale: 30, phrase: "Goodnart" }, //Sweden
  NO: { year: "2019", scale: 30, phrase: "Cured Salmon" }, //Norway
  FR: { year: "2019, 2018, 2011", scale: 30, phrase: "Croissant" }, //France
  BE: { year: "2017", scale: 30, phrase: "Sticky Rice" }, //Belgium
  IT: { year: "2022", scale: 30, phrase: "" }, //Italy
  NL: { year: "2011", scale: 30, phrase: "Sticky Rice" }, //Netherlands
  CZ: { year: "2011", scale: 30, phrase: "Praha" }, //Czech Republic
  HU: { year: "2017", scale: 30, phrase: "" }, //Hungary
  DK: { year: "2022, 2019", scale: 30, phrase: "" }, //Denmark
  JO: { year: "2018", scale: 30, phrase: "" }, //Jordan
  IL: { year: "2018", scale: 30, phrase: "" }, //Israel
  SK: { year: "2011", scale: 30, phrase: "" }, //Slovakia
  JP: { year: "2016", scale: 30, phrase: "" }, //Japan
  HK: { year: "2017", scale: 30, phrase: "" }, //Hong Kong
  H: { year: "2017", scale: 30, phrase: "" }, //Hungary

  S: { year: "2017", scale: 30, phrase: "Sticky Rice" }, //Switzerland




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
  // "ET": "Ethiopia",
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
