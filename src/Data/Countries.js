
const countries = {

  PK: { year: "2021", scale: 60, phrase: "Ice cream walla" },
  US: { year: "Every year", scale: 100, phrase: "Yee haw!" },
  CA: { year: "2022, 2019, 2009", scale: 50, phrase: "Git statusssss" },
  BR: { year: "2020", scale: 30, phrase: "" },
  AU: { year: "2022, 2019, 2009", scale: 30, phrase: "Sorry, eh?" },
  CL: { year: "2023, 2019, 2016, ", scale: 90, phrase: "Weon" },
  MX: { year: "2017", scale: 30, phrase: "Weyyy" },
  PR: { year: "2022, 2019, 2009", scale: 30, phrase: "Sato" },
  // "AX": 60,
  // "IN": 100,
  // "CA": 10 ,
  // "US": 100,
  // "BE": 5,
  // "AR": 10,
  // "AM": "Armenia",
  // "AW": "Aruba",
  // "AU": "Australia",
  // "AT": "Austria",
  // "AZ": "Azerbaijan",
  // "BS": "Bahamas",
  // "BH": "Bahrain",
  // "BD": "Bangladesh",
  // "BB": "Barbados",
  // "BY": "Belarus",

  // "BZ": "Belize",
  // "BJ": "Benin",
  // "BM": "Bermuda",
  // "BT": "Bhutan",
  // "BO": "Bolivia",
  // "BA": "Bosnia and Herzegovina",
  // "BW": "Botswana",
  // "BV": "Bouvet Island",
  // "BR": "Brazil",
  // "IO": "British Indian Ocean Territory",
  // "BN": "Brunei Darussalam",
  // "BG": "Bulgaria",
  // "BF": "Burkina Faso",
  // "BI": "Burundi",
  // "KH": "Cambodia",
  // "CM": "Cameroon",
  // "CA": "Canada",
  // "CV": "Cape Verde",
  // "KY": "Cayman Islands",
  // "CF": "Central African Republic",
  // "TD": "Chad",
  // "CL": "Chile",
  // "CN": "China",
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