function getDogImage(dogNumber) {
    fetch('https://dog.ceo/api/breeds/image/random/' + dogNumber)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      //gets number from input & saves to variable
      let dogNumber = $('#dogNumber').val();  
      getDogImage(dogNumber);
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });

function response(){
    response().json; 
}; 

// response => response.json()