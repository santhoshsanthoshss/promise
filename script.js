const main = document.querySelector("#main");

function requestAPI() {
  fetch("https://rest-countries-api-techieegy.herokuapp.com/v1/all")
    .then((response) => {
      //    console.log(response.json());
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      createElements(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createElements(data) {
  // console.log(data[0].flags[0]);
  //  for creating element
  for (const country of data) {
    const div = document.createElement("div");
    div.classList.add("flex-item");
    // if (
    //   country.name &&
    //   country.flags &&
    //   country.capital &&
    //   country.alpha2Code &&
    //   country.alpha3Code & country.region &&
    //   country.latlng
    // ) {
    div.innerHTML = `
    <h1>${country.name}</h1> 
    <img src="${country.flags[0]}"/>
    <p>Capital : <span class="green-fill">${country.capital}</span></p>
    <p>Country code : <span class="bold">${country.alpha2Code},${country.alpha3Code}</span></p>
    <p>Region : <span class="bold">${country.region}</span></p>
    <p>Lat,Long: <span class="bold">${country.latlng[0]},${country.latlng[1]}</span></p>`;
    // }
    main.append(div);
  }

  // document.createElement("div").classList.add("grid-item")
}
requestAPI();
