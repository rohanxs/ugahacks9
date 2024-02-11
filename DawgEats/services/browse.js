const signOutButton = document.getElementById("signout");

signOutButton.onclick = () => {
  window.location.href = "../signin.html";
}

const recsButton = document.getElementById("recs");

recsButton.onclick = () => {
  window.location.href = "./recs.html";
}

const trackButton = document.getElementById("track");

trackButton.onclick = () => {
  window.location.href = "./track.html";
}

const directionsElement = document.getElementById("directions");
const hallBtn = document.getElementById("hallbtn");

let render_list = document.getElementById("render-list");

function loadDiningHall(diningHall) {
  render_list.innerHTML = "";

  let directionText = "";
  switch(diningHall) {
    case "bolton":
      directionText = "Bolton";
      break;
    case "joefrank":
      directionText = "Joe Frank";
      break;
    case "ohouse":
      directionText = "O-House";
      break;
    case "snelling":
      directionText = "Snelling";
      break;
    case "theniche":
        directionText = "The Niche";
      break;
    default:
      console.log("N/A dining hall.");
  }

  directionsElement.innerText = "Showing food available at ";
  hallBtn.innerText = directionText;

  fetch(`../../hall-data/${diningHall}/lunch.json`).then(response => {
    return response.json();
  }).then(data => {
    for (const key in data) {
      let element = data[key];

      let nameString = "";
      if (Object.hasOwn(element, "name")) {
        nameString = element["name"];
      } else {
        // what the f*ck?
        nameString = key.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      }

      if (nameString.length > 22) continue;

      let nutritionInfo = "";
      if (Object.hasOwn(element, "nutrition_info"))
        nutritionInfo = element['nutrition_info'];
      else if (Object.hasOwn(element, "nutrition_information"))
        nutritionInfo = element['nutrition_information'];
      else
        continue;

      let allergensArray = [];
      if (Object.hasOwn(element, "allergens"))
        allergensArray = element["allergens"];
      else if (Object.hasOwn(element, "attributes")) {
        allergensArray = element["attributes"];
      } else {
        continue;
      }

      let allergensString = "";

      i = 0;
      allergensArray.forEach((element) => {
        if (i > 4) return;
        allergensString += `${element}, `;
        i++
      });

      if (allergensString.length > 0)
        allergensString = allergensString.substring(0, allergensString.length-2);

      let imstats = "";
      if (Object.hasOwn(nutritionInfo, "calories")) imstats += `<b>${nutritionInfo["calories"]}</b> calories, `;
      if (Object.hasOwn(nutritionInfo, "serving_size")) imstats += `<b>${nutritionInfo["serving_size"]}</b> serving size, `;
      if (Object.hasOwn(element, "serving_size")) imstats += `<b>${element["serving_size"]}</b> serving size, `;
      if (Object.hasOwn(nutritionInfo, "protein")) imstats += `<b>${nutritionInfo["protein"]}</b> protein, `;
      if (Object.hasOwn(nutritionInfo, "total_fat")) imstats += `<b>${nutritionInfo["total_fat"]}</b> total fat, `;
      if (imstats.length > 0) imstats = imstats.substring(0, imstats.length - 2) + ".";

      let stats = "";
      if (Object.hasOwn(nutritionInfo, "sodium")) stats += `<b>${nutritionInfo["sodium"]}</b> sodium, `;
      if (Object.hasOwn(nutritionInfo, "cholesterol")) stats += `<b>${nutritionInfo["cholesterol"]}</b> cholesterol, `;
      if (Object.hasOwn(nutritionInfo, "sugar")) stats += `<b>${nutritionInfo["sugar"]}</b> sugar, `;
      if (Object.hasOwn(nutritionInfo, "calcium")) stats += `<b>${nutritionInfo["calcium"]}</b> calcium, `;
      if (stats.length > 0) stats = stats.substring(0, stats.length - 2) + ".";
      
      render_list.innerHTML += (
        `<div class="food-container">
          <div class="food">
            <div style="width: 1000px; margin-bottom: -20px;">
              <p class="name">${nameString}</p>
              <p class="allergens"><b>${allergensString}</b></p>
            </div>
            <div style="width: 300px;">
              <p class="stats">${stats}</p>
            </div>
          </div>
          <p class="imstats">${imstats}</p>
        </div>`
      )
    
    }
  }).catch(err => {
    return console.log(err);
  });
  
}