console.log('Client side javascript file is loaded!')



var searchLocation = document.querySelector('form');
var search = document.querySelector('input')
var msg1 = document.querySelector('#msg-1')
var msg2 = document.querySelector('#msg-2')

searchLocation.addEventListener('submit', (event) => {
    event.preventDefault()
    let location = search.value

    msg1.textContent = 'Loading....';
    msg2.textContent = '';

    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                console.log('Error', data.error)
                msg1.textContent= data.error
            }
            else {
                console.log(data.location)
                console.log(data.forecast)
                msg1.textContent = location;
                msg2.textContent = data.forecast;
            }
        })
})