document.addEventListener("DOMContentLoaded", function () {
    var laRecherche = document.getElementById("search");
    var divResultat = document.getElementById("results-table").querySelector("tbody");
    
    laRecherche.addEventListener("input", function () {
        let v = laRecherche.value.toLowerCase();
           divResultat.innerHTML = ""; 
        let f = app.characters.filter(c => c.soul.name.toLowerCase().search(new RegExp(v, "i")) != -1);
        for (let i = 0; i < f.length; i++) {
            let x = document.createElement("tr");
            x.innerHTML = "<td>" + f[i].soul.name + "</td>" + "<td><button class='btn btn-primary' onclick='app.showCharacterDetail(" + f[i].soul.id + ")'>Voir</button></td>";
            divResultat.appendChild(x);
        }
    });
});
    