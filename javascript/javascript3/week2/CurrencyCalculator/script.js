const inputConvertFrom = document.querySelector('#from-input'),
      inputConvertTo = document.querySelector('#to-input'),
      selectFrom = document.querySelector('#from-select'),
      selectTo = document.querySelector('#to-select');

const url = 'https://open.er-api.com/v6/latest/USD';

createOptions();
currencyCalculator();

inputConvertFrom.addEventListener('input',currencyCalculator);
inputConvertTo.addEventListener('input', mirrorCurrencyCalculator);

selectFrom.addEventListener('input',currencyCalculator);
selectTo.addEventListener('input', currencyCalculator);


async function getResource(url) {
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
}

function createOptions() {
    getResource(url)
        .then(data => {
            for (const key in data.rates) {
                const convertFromCurrency = document.createElement('option');
                convertFromCurrency.innerHTML = key;
                selectFrom.appendChild(convertFromCurrency);
                if (key.includes('EUR')) {
                    convertFromCurrency.setAttribute('selected', true);
                }
                

                const convertToCurrency = document.createElement('option');
                convertToCurrency.innerHTML = key;
                selectTo.appendChild(convertToCurrency);
                if (key.includes('DKK')) {
                    convertToCurrency.setAttribute('selected', true);
                }
            }
        })
        .catch(error => {
            console.error(error);
        });

}

function currencyCalculator() {
    getResource(url)
        .then(data => {
            if (inputConvertFrom.value === '') {
                inputConvertTo.value = '';
                return;
            }

            let rateFrom,
                rateTo;
            for (const key in data.rates) {
                if (selectFrom.value === key) {
                    rateFrom = data.rates[key];
                } else if (selectTo.value === key) {
                    rateTo = data.rates[key];
                } 

                inputConvertTo.value = (((+inputConvertFrom.value / rateFrom)) * rateTo).toFixed(2);
            }
        })
        .catch(error => {
            console.error(error);
        });
}

function mirrorCurrencyCalculator() {
    getResource(url)
        .then(data => {
            if (inputConvertTo.value === '') {
                inputConvertFrom.value = '';
                return;
            }
            
            let rateFrom,
                rateTo;
            for (const key in data.rates) {
                if (selectFrom.value === key) {
                    rateFrom = data.rates[key];
                } else if (selectTo.value === key) {
                    rateTo = data.rates[key];
                }

                inputConvertFrom.value = (((+inputConvertTo.value / rateTo)) * rateFrom).toFixed(2);
            }
        })
        .catch(error => {
            console.error(error);
        });
}