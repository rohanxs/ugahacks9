# ![DawgEats](https://media.discordapp.net/attachments/384088851649396747/1205974116377690122/Screenshot_2024-02-10_at_3.30.32_PM.png?ex=65da51eb&is=65c7dceb&hm=a1537d036532bef2542c34d90487d1dc20d9b0b9fc79a4d48069d9b1a4fd98dc&=&format=webp&quality=lossless&width=1400&height=359)

[![My Skills](https://skillicons.dev/icons?i=vscode,js,html,css,firebase,gcp,figma,cloudflare,workers,nodejs)](https://skillicons.dev)

A project submission to the UGAHacks9 Hackathon.

## Team Members
- Rohan Singh
- Caleb Rieck
- Jennifer Ngo
- Jasper Hsieh

## Purpose of Project
The purpose of DawgEats is to aid college students and faculty members on campus and in the community with dealing with one of the most difficult tasks as a college resident. It's not classes, not homework, not working a job, but **eating healthy!** In fact, in our college campus community, many find themselves so preoccupied with their everyday tasks that they are unable to reserve time to ensure they remain informed about the healthiness of their diet. This project's goal is to improve the dining experience of every member of the University of Georgia community.

The primary goal is to make meal planning personal, easy, and inclusive to students, faculty, and visitors alike. Compared to publicly available information about dining halls, which is scattered and inconvenient to access on a daily basis, this project offers more personalization of meals based on the user's preferences, allergies, and diets using AI to understand, suggest, and categorized tailored meals to the user. In addition, this program features a more modern navigation space that makes searching through the dining hall menus easy and convenient, so users can remain informed about the diet options they have on campus.

With the ease of use of our website, users who may have different health goals, such as gaining muscle, losing weight, going vegan, etc., can all take advantage of the interface provided by DawgEats to understand and refine their eating habits. This will allow more members of the community to have more control over their own body, as well as better understand the options given to them on their campus, allowing for a happier and healthier community.


## Tools Used
- HTML/CSS, JavaScript <br>
- Node.js <br>
- Figma (for UI/UX design) <br>
- Visual Studio Code (for Node.js development)

## Public Frameworks Used
- Google Firebase (Firestore DB) <br>
- Auth0 Database Connections API (for logging in) <br>
- Cloudflare Workers API (llama-2 7b NLP Model) <br>

## Public Assets Used
- The UGA Dawg logo has no official source, but is repeatedly used as an official logo for the **University of Georgia.**
- The UGA Background seen on the login screen is from the [**official UGA Twitter account**](https://twitter.com/universityofga/status/1247231365734715392).
- The Bolton Dining Commons picture seen in the background of the landing page is from the [**Bolton Dining Commons website**](https://dining.uga.edu/locations/bolton/).

## Problems and Solutions
- The immediate problem we encountered in the project was the issue of gathering data. While information about dining halls at UGA is publicly available, it is inconsistent, scattered, and in an unreadable format to use on a large scale. However, we knew we would require a comprehensive database of food offered at UGA, so we opted to create this database ourselves. Rather than manually inputting every food item at each dining hall on campus manually for hundreds of items which would be unfeasible for the timespan of the hackathon, we opted to use the Cloudflare Workers API with the llama-2 7b Natural Language Processing model to parse the unreadable data and format it into several JSON files (seen in the `hall-data` folder). Utilizing some clever prompt engineering, the text summarizer could convert paragraphs of text about a datapoint into a convenient JSON object. This allowed us to collect over ten thousand lines of data about UGA dining options in the span of 2 hours.

- In addition to data collection, we faced the issue of implementing data classification. In order to create an application with an AI-based recommendation system, we would have to train the AI on a dataset of strings, which is much more difficult than a typical numerical model. Instead, we opted to, once again, take advantage of the Cloudflare API to place labels on each food item, and with this data classification, we could filter through the dataset with the user's preferences to suggest a comprehensive list of choices that satisfied the user's conditions. In turn, we utilized the llama-2 7b NLP model not only for data collection, but also with classification, which is a principle component of our food recommendation system.

- When creating a login system for the website, we were drawn to using the Auth0 Social Connections API, which essentially provides an easy way to set up a "Login with Google" button, facilating the process of authentication. However, we realized that this solution excludes a large portion of the UGA community, since we'd expect most users to sign up with their UGA e-mails, which is not an option with the Social Connections API. To resolve this issue, we used snippets from the Auth0 Database Connections API in tandem with the Google Firebase DB service (Firestore DB). Although this comprimise required us to manually set up a log in system, we were able to store other details (such as the user's preferences) inside the DB, and most importantly, we were able to include a larger portion of the UGA community.


