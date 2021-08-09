function renderBreweriesList(stateBrews) {
    // console.log("Inside renderBreweriesList: ", stateBrews);
  
    mainEl.innerHTML = ""

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

    const ulEl = document.createElement("ul");
    ulEl.className = "breweries-list";
    searchArticleEl.append(ulEl);
      
    for (let i = 0; i < stateBrews.length; i++) {
      const stateBrew = stateBrews[i];
      // console.log("InsideOfStateBrew: ", stateBrew)     
  
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
  
      // const addressH3El = document.createElement("h3");
      // addressH3El.innerText = "stateBrew.address_2";
      // searchSectionEl.append(addressH3El);
  
      const listh3El = document.createElement("h3");
      listh3El.innerText = "Address:";
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