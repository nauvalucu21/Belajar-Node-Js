// Other lines hidden for brevity
geocode(address, (error, data) => {
    if (error) {
    return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
    return console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
    })
   })