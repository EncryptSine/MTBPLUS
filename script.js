const bigMacHeightCm = 8;
const bigTastyHeightCm = 7;
const bigMacHeightMeters = bigMacHeightCm / 100;
const bigTastyHeightMeters = bigTastyHeightCm / 100;

function convertFromMeters() {
    const meters = document.getElementById('metersInput').value;
    const unit = document.getElementById('unitSelect').value;
    let numberOfUnits, alternativeUnits;

    if (unit === 'bigMac') {
        numberOfUnits = meters / bigMacHeightMeters;
        alternativeUnits = meters / bigTastyHeightMeters;
    } else {
        numberOfUnits = meters / bigTastyHeightMeters;
        alternativeUnits = meters / bigMacHeightMeters;
    }

    document.getElementById('foodInput').value = numberOfUnits.toFixed(2);
    document.getElementById('unitLabel').innerText = unit === 'bigMac' ? 'Big Mac' : 'Big Tasty';
    document.getElementById('result').innerText = `${meters} mètres correspondent à environ ${numberOfUnits.toFixed(2)} ${unit === 'bigMac' ? 'Big Mac' : 'Big Tasty'} empilés, ou ${alternativeUnits.toFixed(2)} ${unit === 'bigMac' ? 'Big Tasty' : 'Big Mac'} empilés.`;
}

function convertFromFood() {
    const units = document.getElementById('foodInput').value;
    const unit = document.getElementById('unitSelect').value;
    let meters, alternativeUnits;

    if (unit === 'bigMac') {
        meters = units * bigMacHeightMeters;
        alternativeUnits = meters / bigTastyHeightMeters;
    } else {
        meters = units * bigTastyHeightMeters;
        alternativeUnits = meters / bigMacHeightMeters;
    }

    document.getElementById('metersInput').value = meters.toFixed(2);
    document.getElementById('result').innerText = `${units} ${unit === 'bigMac' ? 'Big Mac' : 'Big Tasty'} correspondent à environ ${meters.toFixed(2)} mètres, ou ${alternativeUnits.toFixed(2)} ${unit === 'bigMac' ? 'Big Tasty' : 'Big Mac'} empilés.`;
}

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';
});

// Initial conversion to set default values
convertFromMeters();
