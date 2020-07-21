

let toggle = document.getElementById('button');
toggle.addEventListener('change', e => {
    let basicAnnual = document.getElementById('basic-annual');
    let professionalAnnual = document.getElementById('professional-annual');
    let masterAnnual = document.getElementById('master-annual');
    if(basicAnnual.innerHTML==="$199.99") {
        basicAnnual.innerHTML = "$19.99";
    } else {
        basicAnnual.innerHTML = "$199.99";
    }
    
    if(masterAnnual.innerHTML==="$39.99") {
        masterAnnual.innerHTML = "$399.99";
    } else {
        masterAnnual.innerHTML = "$39.99";
    }

    if(professionalAnnual.innerHTML==="$249.99") {
        professionalAnnual.innerHTML = "$24.99";
    } else {
        professionalAnnual.innerHTML = "$249.99";
    }
})