document.querySelector('.btn').addEventListener('click', async (e) => {
    async function showIp() {
        try {
            let userIp = await fetch('https://api.ipify.org/?format=json');
            userIp = await userIp.json();
            let address = await fetch(`http://ip-api.com/json/${userIp.ip}?fields=status,message,continent,country,regionName,city`)
            address = await address.json()

            document.querySelector('.ip-information').insertAdjacentHTML('beforeend', `
                  <li>continent: ${address.continent}</li>
                  <li>country: ${address.country}</li>
                  <li>region: ${address.regionName}</li>
                  <li>city: ${address.city}</li>
            `)
        } catch (error) {
            console.error(error)
        }
    }
    showIp()
})


// Асинхронність у Javascript дає можливість виконувати мережеві запити без блокування основного потоку, це можливо завдяки браузерному движку, який додає код у чергу після його дозволу (відповідь із сервера).

