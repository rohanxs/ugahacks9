const snellingBreakfast = require("./hall-data/snelling/breakfast.json");
const fs = require("fs");

dining_hall_hours = {
  /*
    "dining hall": {
        "open" : [S, M, T, W, T, F, S],
        "close": [S, M, T, W, T, F, S],
        "breakfast": {
            open: [S, M, T, W, T, F, S],
            close: [S, M, T, W, T, F, S],
        }
        "lunch": {
            open: [S, M, T, W, T, F, S],
            close: [S, M, T, W, T, F, S],
        }
        "dinner": {
            open: [S, M, T, W, T, F, S],
            close: [S, M, T, W, T, F, S],
        }
    }
    */
  bolton: {
    open: [830, 700, 700, 700, 700, 700, 830],
    close: [2200, 2200, 2200, 2200, 2200, 2200, 2200],
    breakfast: {
      open: [830, 700, 700, 700, 700, 700, 830],
      close: [1130, 1030, 1030, 1030, 1030, 1030, 1130],
    },
    lunch: {
      open: [1130, 1030, 1030, 1030, 1030, 1030, 1130],
      close: [1600, 1600, 1600, 1600, 1600, 1600, 1600],
    },
    dinner: {
      open: [1600, 1600, 1600, 1600, 1600, 1600, 1600],
      close: [2200, 2200, 2200, 2200, 2200, 2200, 2200],
    },
  },
  joefrank: {
    open: [830, 700, 700, 700, 700, 700, 830],
    close: [2100, 2100, 2100, 2100, 2100, 2100, 2100],
    breakfast: {
      open: [830, 700, 700, 700, 700, 700, 830],
      close: [1130, 1030, 1030, 1030, 1030, 1030, 1130],
    },
    lunch: {
      open: [1130, 1030, 1030, 1030, 1030, 1030, 1130],
      close: [1600, 1600, 1600, 1600, 1600, 1600, 1600],
    },
    dinner: {
      open: [1600, 1600, 1600, 1600, 1600, 1600, 1600],
      close: [2100, 2100, 2100, 2100, 2100, 2100, 2100],
    },
  },
  ohouse: {
    open: [-1, 700, 700, 700, 700, 700, -1],
    close: [-2, 2100, 2100, 2100, 2100, 2100, -2],
    breakfast: {
      open: [-1, 700, 700, 700, 700, 700, -1],
      close: [-2, 1030, 1030, 1030, 1030, 1030, -2],
    },
    lunch: {
      open: [-1, 1030, 1030, 1030, 1030, 1030, -1],
      close: [-2, 1600, 1600, 1600, 1600, 1600, -2],
    },
    dinner: {
      open: [-1, 1600, 1600, 1600, 1600, 1600, -1],
      close: [-2, 2100, 2100, 2100, 2100, 2100, -2],
    },
  },
  snelling: {
    open: [-1, 700, 0, 0, 0, 0, -1],
    close: [-2, 2359, 2359, 2359, 2359, 1430, -2],
    breakfast: {
      open: [-1, 700, 0, 0, 0, 0, -1],
      close: [-2, 1030, 1030, 1030, 1030, 1030, -2],
    },
    lunch: {
      open: [-1, 1030, 1030, 1030, 1030, 1030, -2],
      close: [-2, 1600, 1600, 1600, 1600, 1430, -2],
    },
    dinner: {
      open: [-1, 1600, 1600, 1600, 1600, -1, -1],
      close: [-2, 2359, 2359, 2359, 2359, -2, -2],
    },
  },
  niche: {
    open: [-1, 700, 700, 700, 700, 700, -1],
    close: [-2, 1430, 1430, 1430, 1430, 1430, -2],
    breakfast: {
      open: [-1, 700, 700, 700, 700, 700, -1],
      close: [-2, 1000, 1000, 1000, 1000, 1000, -2],
    },
    lunch: {
      open: [-1, 1000, 1000, 1000, 1000, 1000, -1],
      close: [-2, 1430, 1430, 1430, 1430, 1430, -2],
    },
    dinner: {
      open: [-1, -1, -1, -1, -1, -1, -1],
      close: [-2, -2, -2, -2, -2, -2, -2],
    },
  },
};

const date = new Date();

const getTime = () => {
  return 100 * date.getHours() + date.getMinutes();
};

const checkOpen = (diningHall) => {
  const weekDay = date.getDay();
  const open = dining_hall_hours[diningHall]["open"][weekDay];
  const close = dining_hall_hours[diningHall]["close"][weekDay];
  const time = getTime();
  return open < time && time < close;
};

function searchItem(diningHall, item) {
  const formattedItem = item.replace(/ /g, "_").toLowerCase();
  for (const key in diningHall) {
    if (diningHall.hasOwnProperty(key)) {
      const formattedKey = key.replace(/ /g, "_").toLowerCase();
      if (formattedKey === formattedItem) {
        return diningHall[key];
      }
    }
  }
  return null;
}

function currentMeal(diningHall) {
  const weekDay = date.getDay();
  const time = getTime();
  const Bopen = dining_hall_hours[diningHall]["breakfast"]["open"][weekDay];
  const Bclose = dining_hall_hours[diningHall]["breakfast"]["close"][weekDay];
  const Lopen = dining_hall_hours[diningHall]["lunch"]["open"][weekDay];
  const Lclose = dining_hall_hours[diningHall]["lunch"]["close"][weekDay];
  const Dopen = dining_hall_hours[diningHall]["dinner"]["open"][weekDay];
  const Dclose = dining_hall_hours[diningHall]["dinner"]["close"][weekDay];

  if (Bopen < time && time < Bclose) return "breakfast";
  if (Lopen < time && time < Lclose) return "lunch";
  if (Dopen < time && time < Dclose) return "dinner";
  else return "closed";
}

const listItems = (diningHall, filter) => {
  let items = [];
  for (const key in diningHall) {
    if (diningHall.hasOwnProperty(key) && filter(key)) {
      items.push(key);
    }
  }
  return items;
};

//items = listItems(snellingBreakfast, (item) => parseInt(snellingBreakfast[item]["nutrition_info"]["protein"]) >= 15);
items = listItems(snellingBreakfast, (item) => item);
//console.log(items);

const url =
  "https://api.cloudflare.com/client/v4/accounts/04c63a6476700b77f169eb25e86ceb86/ai/run/@cf/meta/llama-2-7b-chat-int8";
const bearerToken = "HDmeSo5-6TmUqbAG6XkP-2-YYl8PvQWRstdc-yJl";
//const prompt = "What is the healthiest option among this list?" + items.join(", ")
const prompt = `
Please generate a JSON object for the food item named with its name with precise formatting. The JSON should start with an object containing the name of the food item, followed by an array for dietary characteristics, and an object for nutritional information. Each nutritional value must include units like "g", "mg", or "oz" as applicable. Ensure that all JSON syntax rules are followed, including the use of commas to separate items within objects and arrays, and ensure that the JSON structure is properly closed with matching curly braces for objects and square brackets for arrays. The nutritional information should be listed as key-value pairs within an object, not as elements within an array. Here are the details to include:

Raisins
Free of Gluten
Heart Healthy
Vegan
Meatless
Fruit
Serving Size: 0.5 Oz

Calories: 46

Total Fat:0g
Saturated Fat:0g
Trans Fat:0g
Cholesterol:0mg
Sodium:4mg
Total Carbs:11g
Dietary Fiber:1g
Sugar:10g
Added Sugar:0g
Protein:0g
Calcium:7.10mg
Iron:0.40mg
Potassium:110mg
Remember, the JSON object should be syntactically correct and formatted in a readable manner, with proper indentation where applicable. Please provide the JSON object without any introductory sentences or additional text outside the JSON structure.

`;
console.log(prompt);
fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: prompt,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    if (typeof data["result"]["response"] === "string") {
      let responseString = data["result"]["response"];

      const openingBraces = (responseString.match(/{/g) || []).length;
      const closingBraces = (responseString.match(/}/g) || []).length;

      if (openingBraces > closingBraces) {
        for (let i = 0; i < openingBraces - closingBraces; i++) {
          responseString += "}";
        }
      }

      const jsonStartIndex = responseString.indexOf("{");
      if (jsonStartIndex !== -1) {
        const jsonPart = responseString.substring(jsonStartIndex);
        try {
          const jsonObject = JSON.parse(jsonPart);
          console.log(JSON.stringify(jsonObject, null, 2));

          fs.writeFile(
            "res.json",
            JSON.stringify(jsonObject, null, 2),
            "utf8",
            (error) => {
              if (error) {
                console.error("Error writing file:", error);
              } else {
                console.log(
                  "Successfully wrote pretty-printed JSON to res.json."
                );
              }
            }
          );
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
        }
      } else {
        console.error("No JSON data found in the response string.");
      }
    } else {
      console.error("responseString is not a valid string.");
      console.log(typeof data);
    }
  })
  .catch((error) => console.error("Error:", error));

  
