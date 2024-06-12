import React from 'react'

import Sandiego from '../Assets/Sandiego.jpg'
import Navidad from '../Assets/Navidad.jpg'
import Santiwindow from '../Assets/Santiwindow.jpg'
import Andes from '../Assets/Andes.jpg'
import Santifocus from '../Assets/Santifocus.jpg'
import Sunsetpark from '../Assets/Sunsetpark.jpg'
import Santimiami from '../Assets/Santimiami.jpg'
import Santinapa from '../Assets/Santinapa.jpg'
import Santisubway from '../Assets/Santisubway.jpg'
import Santivillagevoice from '../Assets/Santivillagevoice.jpg'
import Joshuatree from '../Assets/Joshuatree.jpg'
import Sundesert from '../Assets/Sundesert.jpg'
import Desertreflection from '../Assets/Desertreflection.jpg'
import SOL from '../Assets/SOL.jpg'
import Grandcentral from '../Assets/Grandcentralstairs.jpg'
import Treeshadow from '../Assets/Treeshadows.jpg'
import NYC from '../Assets/NYC.jpg'
import Fireworks from '../Assets/Fireworks.jpg'
import Oculus from '../Assets/Oculus.jpg'

const image = (name) => {
    return require(`../Assets/${name}.jpg`)
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
        image: Santiwindow,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 6,
        title: 'Andes Mountains',
        description: "Flying over Chile",
        image: Andes,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 7,
        title: 'Dogpatch',
        description: "Waiting for the ball",
        image: Santifocus,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 8,
        title: 'Oculus',
        description: "Fidi Manhattan",
        image: Oculus,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 9,
        title: 'Miami',
        description: "Santi boating in Miami",
        image: Santimiami,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 10,
        title: 'New York',
        description: "Santi by the subway",
        image: Santisubway,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 11,
        title: 'East Village',
        description: "Santi in the East Village",
        image: Santivillagevoice,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 12,
        title: 'Napa',
        description: "Santi enjoying Napa's wine country",
        image: Santinapa,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 13,
        title: 'Joshua Tree',
        description: "Joshua Tree National Park",
        image: Joshuatree,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 14,
        title: 'Navidad',
        description: "Navidad Chile",
        image: Navidad,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 15,
        title: 'Joshua Tree',
        description: "Desert sun in Joshua Tree National Park",
        image: Sundesert,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 16,
        title: 'NYC',
        description: "NYC Sky line fireworks",
        image: Fireworks,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 17,
        title: 'New York City',
        description: "Taken from the Brooklyn Bridge",
        image: SOL,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 18,
        title: 'Grand Central',
        description: "During Covid-19",
        image: Grandcentral,
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 19,
        title: 'Joshua Tree',
        description: "Desert mirror image",
        image: Treeshadow,
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
        image: NYC,
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
        description: "Desert mirror image",
        image: image("Montrealrainbow"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },
    {
        id: 24,
        title: 'Chile',
        description: "Sunset Santiago Chile",
        image: Sunsetpark,
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
        id: 25,
        title: 'Flatiron',
        description: "Santiago in Central Park",
        image: image("Pride"),
        link: 'https://stock.adobe.com/contributor/210564764/Ali',
    },

];

export default photos
