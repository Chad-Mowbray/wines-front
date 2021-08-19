const fetchWines = () => {
  return fetch(`https://bravo-wine-api.herokuapp.com/wines`)
    .then((response) => response.json())
}

const fetchWineByID = (wineID) => {
  return fetch(`https://bravo-wine-api.herokuapp.com/wines/${wineID}`)
    .then((response) => response.json())
}

const addNewWine = (wineObject) => {
  return fetch('https://bravo-wine-api.herokuapp.com/wines/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(wineObject)
  })
}

export  {
  fetchWineByID,
  fetchWines,
  addNewWine
}