const select = document.querySelector('#weather-type');
const message = document.querySelector('.message-text');

select.addEventListener('change', displayMessage);

function displayMessage() {
    const choice = select.value;

    if (choice === 'sunny') {
        message.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      } else if (choice === 'rainy') {
        message.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      } else if (choice === 'snowing') {
        message.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      } else if (choice === 'overcast') {
        message.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      } else {
        message.textContent = '';
      }
}

