const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryUl = document.querySelector('.gallery');


// const creatGallery = ({url, alt}) => 
// `<img class = 'img-js' src = ${url} alt = ${alt}>`;
// const newGallery = images.map((el) => creatGallery(el)).join('');


const newGallery = images.map(({url, alt}) => 
`<img class = 'img-js' src = ${url} alt = ${alt}>`)

galleryUl.insertAdjacentHTML('afterbegin', newGallery);
console.log(galleryUl)