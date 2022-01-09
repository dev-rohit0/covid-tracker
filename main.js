fetch('https://covid-api.mmediagroup.fr/v1//cases?country=India')
.then(response => response.json())
.then(data => {
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
