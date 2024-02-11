// parsing string data from UGA dining website using cloudflare

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
