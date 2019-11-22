'use strict';

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let typeDog = document.getElementById('dog-input').value;
    console.log(`Type of dog: ${typeDog}`);
    getDogImages(typeDog);
  });   
}

function getDogImages(typeDog) {
  fetch(`https://dog.ceo/api/breed/${typeDog}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.code === 404) {
            alert(`error: ${typeDog} is not a breed`);
        } else{
            displayResults(responseJson);
        }
    });
    
}

function displayResults(responseJson) {
//   for (let i=0; i < responseJson.message.length; i++) {
  let imgArr = responseJson.message;
  $('.results').append(`<img src="${imgArr}" class="dog-img">`);
  $('.results').removeClass('hidden');
  
}

$(function(){
  console.log('App loaded! Waiting for submit!');
  watchForm();
});