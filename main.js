const button = document.querySelector('button');

function clickedButton(){
  axios.get("https://swapi.dev/api/planets/?search=Alderaan")
  .then(res => {
    residents = res.data.results[0].residents;

    for (let i = 0; i < residents.length; i++){
      axios.get(residents[i])
      .then(res => {
        console.log(residents[i]);
        let name = res.data.name
        let h2 = document.createElement("h2")  
        var text = document.createTextNode(name);
        h2.appendChild(text);  
        document.body.appendChild(h2)
        }     
      )
    }
  })
}

button.addEventListener("click", clickedButton);