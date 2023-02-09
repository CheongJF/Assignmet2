const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '53e4248e94mshd5450fbdceb117dp16e470jsnedaf205a74a3',
      'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
    }
  };
  
  fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));