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


const ulList = document.querySelector('.gallery');

const markup = images
	.map(img => `<li><img class="picture" src=${img.url} width = '400' height = '300' alt='${img.alt}'></img></li>`)
	.join('');

ulList.insertAdjacentHTML('beforeend', markup);
  
const pictures = document.querySelectorAll('.picture');

ulList.style.flexWrap = 'column-reverse';
ulList.style.display = 'flex';
ulList.style.justifyContent = 'center';
ulList.style.listStyle = 'none';
ulList.style.gap = '10px';
