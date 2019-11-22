'use strict';


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogNumber = document.getElementById('randomNumber').value;
    console.log(`Number of images: ${dogNumber}`);
    getDogImages();
  });   
}

function getDogImages(dogNumber) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}



$(function(){
  console.log('App loaded! Waiting for submit!');
  watchForm();
});