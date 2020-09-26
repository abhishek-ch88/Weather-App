const geocode = require('./utilities/geocode.js')
const forecast = require('./utilities/forecast.js')

const Address = process.argv[2];
if (Address /* !== undefined */) {
  geocode(Address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error)
    }
    forecast(latitude, longitude, (error, datain) => {
      if (error) {
        return console.log(error)
      }
      console.log(location);
      console.log(datain)
    })
  })
} else {
  console.log("Please provide an address")
}




