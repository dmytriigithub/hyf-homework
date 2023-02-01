const inputConvertFrom = document.querySelector('#from-input'),
      inputConvertTo = document.querySelector('#to-input'),
      selectFrom = document.querySelector('#from-select'),
      selectTo = document.querySelector('#to-select');



fetch('https://open.er-api.com/v6/latest/USD')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
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

        inputConvertFrom.addEventListener('input', function () {
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
        });

        inputConvertTo.addEventListener('input', function() {
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
        }); 
    })
    .catch(error => {
        console.log(error);
      });

    
