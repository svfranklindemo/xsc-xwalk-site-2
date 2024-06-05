//AEM Publish instance
const AEM_HOST_2 = "https://publish-p131639-e1282833.adobeaemcloud.com";


fetch('https://publish-p131639-e1282833.adobeaemcloud.com/graphql/execute.json/my-project/all-teams')
.then(response => response.json())
.then(response => {

    const title = response.data.teamList.items[0].title;
    document.write (title)

})
.catch(error => {
  console.log('Error fetching data:', error);
});



