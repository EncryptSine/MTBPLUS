let products = [];
let selectedProductHeightMeters = 0;

// Charger le fichier JSON
fetch('products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        products = data.products;
        console.log('Produits chargés:', products); // Debug log
        populateUnitSelect();
        convertFromMeters(); // Initial conversion to set default values
    })
    .catch(error => {
        console.error('Erreur lors du chargement du JSON:', error);
    });

// Remplir le menu déroulant avec les produits
function populateUnitSelect() {
    const unitSelect = document.getElementById('unitSelect');
    unitSelect.innerHTML = ''; // Clear existing options

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.heightCm;
        option.textContent = product.name;
        unitSelect.appendChild(option);
    });

    // Set the selected product height
    selectedProductHeightMeters = unitSelect.value / 100;
    document.getElementById('unitLabel').innerText = unitSelect.options[unitSelect.selectedIndex].text;
    console.log('Menu déroulant mis à jour avec les produits'); // Debug log
}

function convertFromMeters() {
    const meters = document.getElementById('metersInput').value;
    const numberOfUnits = meters / selectedProductHeightMeters;

    document.getElementById('foodInput').value = numberOfUnits.toFixed(2);
    document.getElementById('unitLabel').innerText = document.getElementById('unitSelect').options[document.getElementById('unitSelect').selectedIndex].text;
    document.getElementById('result').innerText = `${meters} mètres correspondent à environ ${numberOfUnits.toFixed(2)} ${document.getElementById('unitLabel').innerText} empilés.`;
}

function convertFromFood() {
    const units = document.getElementById('foodInput').value;
    const meters = units * selectedProductHeightMeters;

    document.getElementById('metersInput').value = meters.toFixed(2);
    document.getElementById('result').innerText = `${units} ${document.getElementById('unitLabel').innerText} correspondent à environ ${meters.toFixed(2)} mètres.`;
}

document.getElementById('unitSelect').addEventListener('change', function() {
    selectedProductHeightMeters = this.value / 100;
    convertFromMeters();
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';
});
