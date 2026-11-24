const metersInput = document.getElementById('metersInput');
const foodInput = document.getElementById('foodInput');
const unitSelect = document.getElementById('unitSelect');
const unitLabel = document.getElementById('unitLabel');
const result = document.getElementById('result');

const EMPTY_MESSAGE = 'Entre une hauteur ou une quantité.';

let products = [];

// Remplir le menu déroulant par catégories
function populateUnitSelect() {
    unitSelect.innerHTML = '';
    products = [];

    window.PRODUCT_CATEGORIES.forEach(group => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = group.category;

        group.products.forEach(product => {
            const option = document.createElement('option');
            option.value = products.length;
            option.textContent = product.name;
            optgroup.appendChild(option);
            products.push(product);
        });

        unitSelect.appendChild(optgroup);
    });

    unitSelect.value = 0; // Big Mac par défaut
    unitLabel.textContent = currentProduct().name;
}

function currentProduct() {
    return products[unitSelect.value] || products[0];
}

function heightMeters() {
    return currentProduct().heightCm / 100;
}

function formatNumber(n) {
    return n.toLocaleString('fr-FR', { maximumFractionDigits: 2 });
}

function render(meters, units) {
    const product = currentProduct();
    unitLabel.textContent = product.name;
    result.textContent = `${formatNumber(meters)} m, c'est environ ${formatNumber(units)} × ${product.name} empilé(s).`;
}

function clear() {
    result.textContent = EMPTY_MESSAGE;
    unitLabel.textContent = currentProduct().name;
}

function convertFromMeters() {
    const meters = parseFloat(metersInput.value);
    if (!Number.isFinite(meters) || meters < 0) {
        foodInput.value = '';
        return clear();
    }
    const units = meters / heightMeters();
    foodInput.value = Number(units.toFixed(2));
    render(meters, units);
}

function convertFromFood() {
    const units = parseFloat(foodInput.value);
    if (!Number.isFinite(units) || units < 0) {
        metersInput.value = '';
        return clear();
    }
    const meters = units * heightMeters();
    metersInput.value = Number(meters.toFixed(2));
    render(meters, units);
}

metersInput.addEventListener('input', convertFromMeters);
foodInput.addEventListener('input', convertFromFood);
unitSelect.addEventListener('change', () => {
    // Si les mètres sont renseignés on les conserve, sinon on part de la quantité
    if (metersInput.value !== '') {
        convertFromMeters();
    } else {
        convertFromFood();
    }
});

populateUnitSelect();
clear();
