const formEl = document.querySelector ("#select-state-form")
console.log("inside formEl: ", formEl);

const mainEl = document.querySelector("main");
console.log("Inside mainEl: ", mainEl);

let state = {
  selectStateInput: "",
  breweries: [],
  cities: [],
  filters: {
    type: "",
    city: [],
    search: ""
  }
};

  formEl.addEventListener("submit", (event) => {
  event.preventDefault()
  
  const stateInput = formEl.querySelector("#select-state")
  console.log("InsideOfStateInput: ", stateInput.value)

  const url = `https://api.openbrewerydb.org/breweries?by_state=${stateInput.value}&per_page=50`
  console.log("Inside url: ", url)

  fetch(url)
  .then((res) => res.json())
  .then((brewState) => {

    state = {
      ...state,
      breweries: brewState
  };

  console.log("Inside GET Fetch: ", brewState);

  renderBreweriesList(brewState);
  renderAsideElement(brewState); 
  
    // Do something with beerState
  })
  // Access the forms' inputs and their values 
  formEl.reset()
})

function renderAsideElement(getWellCaptSteven) {

const asideEl = document.createElement("aside");
  asideEl.className = "filters-section";
  mainEl.append(asideEl);

  const h2El = document.createElement("h2");
  h2El.innerText = "Filter By";
  asideEl.append(h2El);

  const filterFormEl = document.createElement("form");
  filterFormEl.id = "filter-by-type-form";
  filterFormEl.autocomplete = "off";
  asideEl.append(filterFormEl);

  const filterLabelEl = document.createElement("label");
  filterLabelEl.for = "filter-by-type";
  filterFormEl.append(filterLabelEl);

  const filterh3El = document.createElement("h3");
  filterh3El.innerText = "Type of Brewery";
  filterLabelEl.append(filterh3El);

  const filterSelectEl = document.createElement("select");
  filterSelectEl.name = "filter-by-type";
  filterSelectEl.id = "filter-by-type"; 

  filterSelectEl.addEventListener("change", (event) => {
    const filterByTypeValue = event.target.value;

    state = {
      ...state,
      filters: {
        ...state.filters,
        type: filterByTypeValue
      }
    };

  const filteredBreweries = state.breweries.filter(
      (brewery) => brewery["brewery_type"] === filterByTypeValue
    );
    console.log(filteredBreweries);

    console.log("Inside select listener: ", state);
    
    renderBreweriesList(filteredBreweries);    
  }); 

  filterFormEl.append(filterSelectEl);

  const optionEl1 = document.createElement("option");
  optionEl1.value = "";
  optionEl1.innerText = "Select a type...";
  filterSelectEl.append(optionEl1);

  const optionEl2 = document.createElement("option");
  optionEl2.value = "micro";
  optionEl2.innerText = "Micro";
  if (state.filters.type === optionEl2.value) {
    optionEl2.selected = true;
  }
  filterSelectEl.append(optionEl2);

  const optionEl3 = document.createElement("option");
  optionEl3.value = "regional";
  optionEl3.innerText = "Regional";
  if (state.filters.type === optionEl3.value) {
    optionEl3.selected = true;
  }
  filterSelectEl.append(optionEl3);

  const optionEl4 = document.createElement("option");
  optionEl4.value = "brewpub";
  optionEl4.innerText = "Brewpub";
  if (state.filters.type === optionEl4.value) {
    optionEl4.selected = true;
  }
  filterSelectEl.append(optionEl4);  

  const filterDivEl = document.createElement("div");
  filterDivEl.className = "filter-by-city-heading";
  asideEl.append(filterDivEl);

  const divTitleEl = document.createElement("h3");
  divTitleEl.innerText = "Cities";
  filterDivEl.append(divTitleEl);

  const divButtonEl = document.createElement("button");
  divButtonEl.className = "clear-all-btn";
  divButtonEl.innerText = "clear all";
  filterDivEl.append(divButtonEl);

  const formEl2 = document.createElement("form");
  formEl2.id = "filter-by-city-form";
  asideEl.append(formEl2);

  for (let i = 0; i < getWellCaptSteven.length; i++) {
    const filter = getWellCaptSteven[i];

  const inputEL1 = document.createElement("input");
  inputEL1.type = "checkbox";
  inputEL1.name = filter.city;
  inputEL1.value = filter.city;
  formEl2.append(inputEL1);

  const labelEl1 = document.createElement("label");
  labelEl1.for = filter.city;
  labelEl1.innerText = filter.city;
  formEl2.append(labelEl1);
}
}


// Steven's version

// const defaultOption = document.createElement("option");
//   defaultOption.value = "";
//   defaultOption.innerText = "Please select a type...";

//   filterSelectEl.append(defaultOption);

//   const options = ["Micro", "Regional", "Brewpub"];

//   options.forEach((option) => {
//     const optionEl = document.createElement("option");
//     optionEl.value = option.toLowerCase();
//     optionEl.innerText = option;

//     if (state.filters.type === option.toLowerCase()) {
//       optionEl.selected = true;
//     };

//     filterSelectEl.append(optionEl);
//   });