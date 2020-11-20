const apiKey = 'erdyjeqklq7Yjk8QzTmKbAGn0KMeEaAx';
const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const query = `${base}?apikey=${apiKey}`;


const getCity = async (city) => {
  console.log(`${query}&q=${city}`);
  const response = await fetch(`${query}&q=${city}`);
    return response;

};

const city = getCity('hässleholm');
console.log(city);

//http://dataservice.accuweather.com/locations/v1/cities/search
//?apikey=erdyjeqklq7Yjk8QzTmKbAGn0KMeEaAx&q=Lund

// Get the input field
const input = document.getElementById("cityInput");

    function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that runs

            alert(input.value);
        }
    }
 