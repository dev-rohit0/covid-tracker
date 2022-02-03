let state = document.getElementById('stateName');

document.getElementById('btn').addEventListener('click',stateCase);

fetch('https://covid-api.mmediagroup.fr/v1//cases?country=India')
.then(response => response.json())
.then(data => {
   console.log(data);
   document.getElementById('cases').innerHTML = data.All.confirmed.toLocaleString();
    document.getElementById('deaths').innerHTML = data.All.deaths.toLocaleString();
    document.getElementById('population').innerHTML = data.All.population.toLocaleString();
    document.getElementById('lastUpdated').style.display = 'none';

});
fetch('https://covid-api.mmediagroup.fr/v1//vaccines?country=India')
.then(response => response.json())
.then(data => {
 
document.getElementById('vaccinations').innerHTML = data.All.people_vaccinated.toLocaleString();
document.getElementById('partially').innerHTML = data.All.people_partially_vaccinated.toLocaleString(); 
});


function stateCase(){
    let stateName = state.value;
    console.log(stateName);

    if (stateName != "") {
       
       fetch('https://covid-api.mmediagroup.fr/v1//cases?country=India')
    .then(response => response.json())
    .then(data => {
       console.log(data);
           document.getElementById('cases').innerHTML = data[stateName]['confirmed'];
        document.getElementById('deaths').innerHTML = data[stateName]['deaths'];
        document.getElementById('population').style.display = 'none';
        document.getElementById('vaccine').style.display = 'none';
       document.getElementById('pop').style.display = 'none';
       document.getElementById('lastUpdated').innerHTML = data[stateName]['updated']; 
       
   });
    } else {
       
       fetch('https://covid-api.mmediagroup.fr/v1//cases?country=India')
        .then(response => response.json())
        .then(data => {
           console.log(data);
           document.getElementById('cases').innerHTML = data.All.confirmed.toLocaleString();
            document.getElementById('deaths').innerHTML = data.All.deaths.toLocaleString();
            document.getElementById('population').innerHTML = data.All.population.toLocaleString();
     
       });
       fetch('https://covid-api.mmediagroup.fr/v1//vaccines?country=India')
        .then(response => response.json())
        .then(data => {
         
       document.getElementById('vaccinations').innerHTML = data.All.people_vaccinated.toLocaleString();
       document.getElementById('partially').innerHTML = data.All.people_partially_vaccinated.toLocaleString(); 
       });
    }


} 


