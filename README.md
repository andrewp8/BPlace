# BPlace

## About:

### Built using JavaScript, React, Express, Node, MaterialUI, HTML, CSS, Google API, ChartJS

### User-friendly interface: 
- The ecommerce site allows users to search for properties by zip code and displays the last search results on the main page. 
- The mobile-responsive design ensures a seamless user experience on all devices using only vanilla CSS and follows the Page-Specific-CSS style..
### Property details and features: 
- Each property is presented as a card, including information such as price, number of bedrooms, square footage, and buttons to add the property to a favorite list or view the property details page.
### Enhanced User Experience: 
- The site integrates the Google Maps API, which concentrates on the area of the zip code when users click on the zip code of each property. 
- Additionally, users can view a chart that uses the ChartJS library to show livability grades and things to consider when moving to the state by clicking on the state abbreviation of each property card.

## Installation:
**Front end**
<ol>
  <li> Navigate to your project folder</li>
  <li> Open terminal from the folder and run:
    <ul>
      <li><code>npx create-react-app your-project-name-here</code></li>
      <li><code>npm install axios react-router-dom react-chartjs-2 @mui/material @mui/icons-material</code></li>
      <li><code>npm start</code></li>
    </ul>
  </li>
</ol>

**Back end**
<ol>
  <li> Navigate to your project backend folder</li>
  <li> Open terminal from the folder and run:
    <ul>
      <li><code>npm init -y</code></li>
      <li><code>npm install nodemon express mongoose dotenv cors</code></li>
      <li>Create **.env** file</li>
      <li><code>nodemon server.js</code></li>
    </ul>
  </li>
</ol>

## Usage:
<ol>
  <li>search for properties by zip code and display the last search result on the welcome page
    <p align="center" width="100%">
      <img alt="Welcome page" width="80%" src="https://user-images.githubusercontent.com/69804999/236063564-ba024bba-2143-4d78-83bb-b107c35c0422.png"/>
    </p>
  </li>
  <li>Concentrated on the area of the zipcode on the map when the zipcode is clicked  
    <p align="center" width="100%">
      <img alt="Concentrated on Google map wehn zipcode is clicked" width="80%" src="https://user-images.githubusercontent.com/69804999/236064337-543ada52-3b52-426a-b4e9-8cc82f06755b.png"/>
    </p>
  </li>
  <li>Area criteria chart is displayed when state abbreviation is clicked
    <p align="center" width="100%">
      <img alt="Area criteria chart is displayed when state abbreviation is clicked" width="80%" src="https://user-images.githubusercontent.com/69804999/236064902-40d44a3a-a9db-47c0-90f2-312f4692454a.png"/>
    </p>
  </li>
  <li>Favorite list
      <p align="center" width="100%">
        <img alt="Favorite list" width="80%" src="https://user-images.githubusercontent.com/69804999/236065316-0c1844dd-88de-45cc-9ab3-cae2deb019cf.png"/>
      </p>
  </li>
</ol>
