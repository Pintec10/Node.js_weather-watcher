console.log('js loaded and running!');


const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const msg1 = document.querySelector('#msg1');
const msg2 = document.querySelector('#msg2');

if (weatherForm !== null) {
    weatherForm.addEventListener('submit', (ev) => {
        ev.preventDefault();

        msg1.textContent = 'Checking the weather, please wait...';
        msg2.textContent = '';

        fetch('/weather?address=' + searchInput.value)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    msg1.textContent = 'Error';
                    msg2.textContent = data.error;
                }
                else {
                    const { dailySummary, currentTemperature, currentPrecipProbability } = data.forecastData;
                    msg1.textContent = data.location;
                    msg2.innerHTML = `${dailySummary} <br>
                                    Currently the temperature is ${currentTemperature} degrees, with a ${currentPrecipProbability}% chance of rain.`
                    console.log(data.location);
                    console.log(data.forecastData);
                }
            })
            .catch(error => {
                console.log(error);
                msg1.textContent = 'Something went wrong...';
                msg2.innerHTML = 'Try to check your connection. <br>(' + error + ')';
            });
    });
}
