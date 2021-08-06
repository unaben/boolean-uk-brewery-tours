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

  const formEl = document.querySelector ("#select-state-form")
  console.log("inside formEl: ", formEl)

  formEl.addEventListener("submit", (event) => {
  event.preventDefault()
  
  const stateInput = formEl.querySelector("#select-state")
  console.log("InsideOfStateInput: ", stateInput.value)

  const url = `https://api.openbrewerydb.org/breweries?by_state=${stateInput.value}`
  console.log("Inside url: ", url)

  fetch(url)
  .then((res) => res.json())
  .then((brewState) => {

  console.log("Inside GET Fetch: ", brewState);

  renderBreweriesList(brewState);
  renderAsideElement(brewState); 
    // Do something with beerState
  })
  // Access the forms' inputs and their values 
  formEl.reset()
})

const mainEl = document.querySelector("main");
console.log("Inside mainEl: ", mainEl);


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
  filterFormEl.append(filterSelectEl);

  const optionEl1 = document.createElement("option");
  optionEl1.value = "";
  optionEl1.innerText = "Select a type...";
  filterSelectEl.append(optionEl1);

  const optionEl2 = document.createElement("option");
  optionEl2.value = "micro";
  optionEl2.innerText = "Micro";
  filterSelectEl.append(optionEl2);

  const optionEl3 = document.createElement("option");
  optionEl3.value = "regional";
  optionEl3.innerText = "Regional";
  filterSelectEl.append(optionEl3);

  const optionEl4 = document.createElement("option");
  optionEl4.value = "brewpub";
  optionEl4.innerText = "Brewpub";
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

  for (let i = 0; i < getWellCaptSteven.length; i++) {
    const filter = getWellCaptSteven[i];

  const formEl2 = document.createElement("form");
  formEl2.id = "filter-by-city-form";
  asideEl.append(formEl2);

  const inputEL1 = document.createElement("input");
  inputEL1.type = "checkbox";
  inputEL1.name = filter.city;
  inputEL1.value = filter.city;
  formEl2.append(inputEL1);

  const labelEl1 = document.createElement("label");
  labelEl1.for = filter.city;
  labelEl1.innerText = filter.city;
  formEl2.append(labelEl1);

  // const inputEL2 = document.createElement("input");
  // inputEL2.type = "checkbox";
  // inputEL2.name = "cincinnati";
  // inputEL2.value = "cincinnati";
  // formEl2.append(inputEL2);

  // const labelEl2 = document.createElement("label");
  // labelEl2.for = "cincinnati";
  // labelEl2.innerText = "Cincinnati";
  // formEl2.append(labelEl2);
 }
}

function renderBreweriesList(stateBrews) {
  // console.log("Inside renderBreweriesList: ", stateBrews);

  const searchTitleEl = document.createElement("h1");
  searchTitleEl.innerText = "List Of Breweries";
  mainEl.append(searchTitleEl);

  const searchheaderEl = document.createElement("header");
  searchheaderEl.className = "search-bar";
  mainEl.append(searchheaderEl);

  const searchFormEl = document.createElement("form");
  searchFormEl.id = "search-breweries-form";
  searchFormEl.autocomplete = "off";
  searchheaderEl.append(searchFormEl);

  const searchLabelEl = document.createElement("label");
  searchLabelEl.for = "search-breweries";
  searchFormEl.append(searchLabelEl);

  const searchh2El = document.createElement("h2");
  searchh2El.innerText = "Search breweries:";
  searchLabelEl.append(searchh2El);

  const searchInputEL = document.createElement("input");
  searchInputEL.id = "search-breweries";
  searchInputEL.name = "search-breweries";
  searchInputEL.type = "text";
  searchFormEl.append(searchInputEL);

  const searchArticleEl = document.createElement("article");
  mainEl.append(searchArticleEl);

  for (let i = 0; i < stateBrews.length; i++) {
    const stateBrew = stateBrews[i];
    // console.log("InsideOfStateBrew: ", stateBrew)

    const ulEl = document.createElement("ul");
    ulEl.className = "breweries-list";
    searchArticleEl.append(ulEl);

    const ListEl = document.createElement("li");
    ulEl.append(ListEl);

    const listh2El = document.createElement("h2");
    listh2El.innerText = stateBrew.name;
    ListEl.append(listh2El);

    const frameEl = document.createElement("div");
    frameEl.className = "type";
    frameEl.innerText = stateBrew.brewery_type;
    ListEl.append(frameEl);

    const searchSectionEl = document.createElement("section");
    searchSectionEl.className = "address";
    ListEl.append(searchSectionEl);

    const addressH3El = document.createElement("h3");
    addressH3El.innerText = "Address: ";
    searchSectionEl.append(addressH3El);

    const listh3El = document.createElement("h3");
    listh3El.innerText = stateBrew.address_2;
    searchSectionEl.append(listh3El);

    const paragraphEl = document.createElement("p");
    paragraphEl.innerText = stateBrew.street;
    searchSectionEl.append(paragraphEl);

    const paragraphEl1 = document.createElement("p");
    searchSectionEl.append(paragraphEl1);

    const strongEl = document.createElement("strong");
    strongEl.innerText = stateBrew.city + ", " + stateBrew.postal_code;
    paragraphEl1.append(strongEl);

    const searchSectionEl2 = document.createElement("section");
    searchSectionEl2.className = "phone";
    ListEl.append(searchSectionEl2);

    const listh3El2 = document.createElement("h3");
    listh3El2.innerText = "Phone: ";

    searchSectionEl2.append(listh3El2);
    const paragraphEl2 = document.createElement("p");
    paragraphEl2.innerText = stateBrew.phone;
    searchSectionEl2.append(paragraphEl2);

    const searchSectionEl3 = document.createElement("section");
    searchSectionEl3.className = "link";
    ListEl.append(searchSectionEl3);

    const anchorEl = document.createElement("a");
    anchorEl.href = stateBrew.website_url;
    anchorEl.target = "_blank";
    anchorEl.innerText = "Visit Website";
    searchSectionEl3.append(anchorEl);
  }
}  
