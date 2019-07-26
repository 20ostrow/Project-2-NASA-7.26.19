var nasaApiKey = "SCVLP3n9StOGNtFdG01nzVDxpGMzS6EsHLukjrNb";

function sendAPIRequest(){
  var nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

  fetch(nasaApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var title = document.createElement("h1");
      title.innerText = json["title"];
      document.body.appendChild(title);
      var explanation = document.createElement("p");
      explanation.innerText = json["explanation"];
      document.body.appendChild(explanation);
      var date = document.createElement("p");
      date.innerText = json["date"];
      document.body.appendChild(date);
      var img = document.createElement("img");
      // img.src = "https://apod.nasa.gov/apod/image/1907/NLCReflectionsAPODheden.jpg";
      img.src = json["url"];
      document.body.appendChild(img);
    })
}
sendAPIRequest()
