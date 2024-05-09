import { getConfigValue } from '../../scripts/configs.js';

export default function decorate(block) {

  let AEM_HOST = '';
  let AEM_GRAPHQL_ENDPOINT = '';

  AEM_HOST = await getConfigValue('aem-host');
  //const aem = "https://publish-p131639-e1282833.adobeaemcloud.com";
  const aem = AEM_HOST;

  alert (aem);
  alert ("hello world);

  const slugDiv = block.querySelector('div:nth-child(1)'); 
  const slugID = document.createElement('div');
  slugID.id = 'slug';
  slugDiv.replaceWith(slugID);
  slugID.innerHTML = `${slugDiv.innerHTML}`;
  const slugTemp = slugID.innerHTML.replace(/<div data-aue-prop=\"text\" data-aue-label=\"Slug\" data-aue-type=\"text\">|<div>|<\/div>/g, '');
  const slug = slugTemp.match(/\S+/g);
  
  const quoteDiv = block.querySelector('div:last-of-type');
  const adventureDiv = document.createElement('div');
  adventureDiv.id = "adventure-" + slug; 
  quoteDiv.replaceWith(adventureDiv);

fetch(AEM_HOST + '/graphql/execute.json/aem-demo-assets/adventures-by-slug;slug=' + slug)
.then(response => response.json())
.then(response => {

const backgroundImage = response.data.adventureList.items[0].primaryImage._publishUrl;
document.getElementById(adventureDiv.id).innerHTML = "<section><img src=" + backgroundImage + "></section>";  

const adventureTitle = response.data.adventureList.items[0].title;
document.getElementById(adventureDiv.id).innerHTML += "<section><h3>"+ adventureTitle + "</h3></section>";

const adventureDesc = response.data.adventureList.items[0].description.plaintext;
document.getElementById(adventureDiv.id).innerHTML += "<section>" + adventureDesc + "</section>";

const adventureType = response.data.adventureList.items[0].adventureType;
document.getElementById(adventureDiv.id).innerHTML += "<section>" + "Adventure Type: " + adventureType + "</section>";

const tripLength = response.data.adventureList.items[0].tripLength;
document.getElementById(adventureDiv.id).innerHTML += "<section>" +"Trip Length: " + tripLength + "</section>";

const tripDifficulty = response.data.adventureList.items[0].difficulty;
document.getElementById(adventureDiv.id).innerHTML += "<section>" + "Difficulty: " + tripDifficulty + "</section>";

const groupSize = response.data.adventureList.items[0].groupSize;
document.getElementById(adventureDiv.id).innerHTML += "<section>" + "Group Size: " + groupSize + "</section>";

const tripItinerary= response.data.adventureList.items[0].itinerary.html;
document.getElementById(adventureDiv.id).innerHTML += "<section>" + "Itinerary: </br>" + tripItinerary + "</section>";

})
.catch(error => {
  console.log('Error fetching data:', error);
});

}





