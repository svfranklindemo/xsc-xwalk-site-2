//AEM Publish instance
const AEM_HOST_2 = "https://publish-p131639-e1282833.adobeaemcloud.com";

export default function decorate(block) {

fetch(AEM_HOST_2 + '/graphql/execute.json/my-project/all-teams')
.then(response => response.json())
.then(response => {

    const title = response.data.teamList.items[0].title;
    document.write (title)

})
.catch(error => {
  console.log('Error fetching data:', error);
});



}