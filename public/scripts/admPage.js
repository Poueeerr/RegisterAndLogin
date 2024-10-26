
const clear = document.getElementById('clear').addEventListener('click', clearData)
const cachedData = localStorage.getItem('cacheCad');


if (cachedData) {
    const cacheCad = JSON.parse(cachedData);
    console.log(cacheCad); 

    display(cacheCad);
} else {
    console.log("No data found in cacheCad.");
}

function display(cacheCad) {
    const p = document.getElementById('data');
    p.textContent = ''; 

    cacheCad.forEach(entry => {
        const text = `Email: ${entry.mail}, Password: ${entry.password}`;
        
        const entryParagraph = document.createElement('p');
        entryParagraph.textContent = text; 

        p.appendChild(entryParagraph);
    });
}


function clearData(){
    localStorage.removeItem('cacheCad'); 
    display([]); 
    console.log("'cacheCad' data has been cleared from localStorage.");
}