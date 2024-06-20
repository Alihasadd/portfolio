
const image = (name) => {
    //return require(`../Assets/${name}.jpg`) Deb shared this one with me
    return new URL(`../Assets/${name}.jpg`, import.meta.url).href
  }

const photos = [
    {
        id: 1,
        title: 'San Francisco',
        description: "Santiago's first time in San Francisco",
        image: image("Sanfran"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 2,
        title: 'Flatiron',
        description: "Walking in Flatiron",
        image: image("ThomasFI"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 3,
        title: 'Joshua Tree',
        description: "Night time in Joshua Tree National Park",
        image: image("Joshuatreenight"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 4,
        title: 'Central park',
        description: "Santiago in Central Park",
        image: image("Santicentral"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 5,
        title: 'Gramercy Park',
        description: "Santiago at home",
        image: image("Santiwindow"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 6,
        title: 'Andes Mountains',
        description: "Flying over Chile",
        image: image("Andes"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 7,
        title: 'Dogpatch',
        description: "Waiting for the ball",
        image: image("Santifocus"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 8,
        title: 'Oculus',
        description: "Fidi Manhattan",
        image: image("Oculus"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 9,
        title: 'Miami',
        description: "Santi boating in Miami",
        image: image("Santimiami"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 10,
        title: 'New York',
        description: "Santi by the subway",
        image: image("Santisubway"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 11,
        title: 'East Village',
        description: "Santi in the East Village",
        image: image("Santivillagevoice"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 12,
        title: 'Napa',
        description: "Santi enjoying Napa's wine country",
        image: image("Santinapa"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 13,
        title: 'Joshua Tree',
        description: "Joshua Tree National Park",
        image: image("Joshuatree"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 14,
        title: 'Navidad',
        description: "Navidad Chile",
        image: image("Navidad"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 15,
        title: 'Joshua Tree',
        description: "Desert sun in Joshua Tree National Park",
        image: image("Sundesert"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 16,
        title: 'NYC',
        description: "NYC Sky line fireworks",
        image: image("Fireworks"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 17,
        title: 'New York City',
        description: "Taken from the Brooklyn Bridge",
        image: image("SOL"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 18,
        title: 'Grand Central',
        description: "During Covid-19",
        image: image("Grandcentralstairs"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 19,
        title: 'Joshua Tree',
        description: "Desert mirror image",
        image: image("Treeshadows"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 20,
        title: 'DC',
        description: "Desert mirror image",
        image: image("DCFireworks"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 21,
        title: 'NYC',
        description: "NYC",
        image: image("NYC"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 22,
        title: 'Joshua Tree',
        description: "Desert mirror image",
        image: image("Desertreflection"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 23,
        title: 'Montreal',
        description: "Montreal",
        image: image("Montrealrainbow"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 24,
        title: 'Chile',
        description: "Sunset Santiago Chile",
        image: image("Sunsetpark"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 25,
        title: 'Covid Claps',
        description: "Santiago in Central Park",
        image: image("Clap"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 26,
        title: 'Flatiron',
        description: "Flatiron Building",
        image: image("Pride"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 27,
        title: 'Flatiron',
        description: "Santiago in Central Park",
        image: image("Birdfish"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 28,
        title: 'Central Park',
        description: "Santiago in Central Park",
        image: image("Birdhand"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 29,
        title: 'The Wharf',
        description: "Santiago in Central Park",
        image: image("Alice"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 30,
        title: 'Central Park',
        description: "Santiago in Central Park",
        image: image("Birdhand"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },

];

export default photos
