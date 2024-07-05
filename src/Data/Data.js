import React from 'react'
import santisticker from '../Assets/santisticker.png'
import Counter from '../Assets/Counter.png'
import couponApp from '../Assets/couponapp.png'
import blog from '../Assets/blog.png'
import simplenotes from '../Assets/Simplenotes.png'
const image = (name) => {
    //return require(`../Assets/${name}.jpg`) Deb shared this one with me
    return new URL(`../Assets/${name}.png`, import.meta.url).href
  }

const data = [
    
    {
        id: 1,
        title: 'Coupon App',
        description: "",
        image: image("Code12"),
        link: 'https://github.com/Alihasadd/Coupon-site',
    },
    {
        id: 2,
        title: 'HTML & CSS Practice',
        description: "",
        image: image("Code3"),
        link: 'https://codepen.io/Alihasadd/pen/mdgpVrW',
    },
    {
        id: 3,
        title: 'HTML & CSS Course',
        description: "",
        image: image("Code1"),
        link: 'https://codepen.io/Alihasadd/pen/LYaoLwZ',
    },
    {
        id: 4,
        title: 'Blog App',
        description: "",
        image: image("Code13"),
        link: 'https://github.com/Alihasadd/my-blog',
    },
    {
        id: 5,
        title: 'Code Pen Practice',
        description: "",
        image: image("Code2"),
        link: '',
    },
    {
        id: 6,
        title: 'HW Grader',
        description: "",
        image: image("Code4"),
        link: '',
    },
    {
        id: 7,
        title: 'Blog App',
        description: "",
        image: image("Code7"),
        link: 'https://github.com/Alihasadd/my-blog',
    },
    {
        id: 8,
        title: 'Code for HW Grader',
        description: "",
        image: image("Code5"),
        link: 'https://codepen.io/Alihasadd/pen/poBRjBP',
    },
    {
        id: 9,
        title: 'Code for Simple Notes',
        description: "",
        image: image("Code6"),
        link: 'https://codepen.io/Alihasadd/pen/rNbGaGe',
    },
    {
        id: 10,
        title: 'Validation',
        description: "",
        image: image("Code8"),
        link: 'https://codepen.io/Alihasadd/pen/xxBNMQJ',
    },
    {
        id: 11,
        title: 'Promise',
        description: "",
        image: image("Code10"),
        link: 'https://codepen.io/Alihasadd/pen/eYogqbP?editors=0010',
    },
    {
        id: 12,
        title: 'APIs',
        description: "",
        image: image("Code11"),
        link: '',
    },
];

export default data
