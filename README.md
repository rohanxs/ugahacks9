# ![DawgEats](https://media.discordapp.net/attachments/384088851649396747/1205974116377690122/Screenshot_2024-02-10_at_3.30.32_PM.png?ex=65da51eb&is=65c7dceb&hm=a1537d036532bef2542c34d90487d1dc20d9b0b9fc79a4d48069d9b1a4fd98dc&=&format=webp&quality=lossless&width=1400&height=359)

[![My Skills](https://skillicons.dev/icons?i=js,html,css,firebase,figma,cloudflare,nodejs)](https://skillicons.dev)

A project submission to the UGAHacks9 Hackathon.

## Team Members
- Rohan Singh
- Caleb Rieck
- Jennifer Ngo
- Jasper Hsieh

## Purpose of Project
This project's goal is to improve the dining experience of every member of UGA. The primary idea is to make meal planning personal, easy, and inclusive to students, faculty, and visitors alike. Compared to the original dining hall website, this project offers more personalization of meals based on the user's preferences, allergies, and diets using AI to understand and suggest tailored meals. In addition, this program features a more modern navigation space that makes looking through the dining hall menus easy and convenient. Through machine learning, this program can constantly update meal plan needs based on the user's responses. Instead of spending time planning and debating, a user can get feedback, suggestions, and a coordinated plan right at their fingertips.

## Tools Used
- HTML/CSS, JavaScript <br>
- Node.js <br>
- Figma (for UI/UX design) <br>
- Visual Studio Code (for Node.js development)

## Public Frameworks
- Google Firebase (Firestore DB) <br>
- Auth0 Database Connections API (for logging in) <br>
- Cloudflare Workers API (llama-2 7b NLP Model) <br>

## Problems and Solutions
The initial problem was utilizing the Auth0 API. More specifically, the inability to easily allow registration with UGA emails which significantly restricted our goals for personalization and user experience since this project was tailored to UGA community members. In reesponse, we decided to shift to the DataBase connections API which is integrated with Google Firebase's Firestorm service. This allowed us to seamlessly accomodate any email registration type and ensure a wider user demographic. Although this made the coding process more meticulous, it ultimately ensured encrypted logins while also storing each user's preferences, historic caloric data, diet restrictions, etc. in an ordered way. 



