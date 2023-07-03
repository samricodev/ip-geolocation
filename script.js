const OPTIONS = {
    method: 'GET',
    params: {
        ip: '189.194.224.51'
      },
    headers: {
        'X-RapidAPI-Key': '5bf257c6c9msh675b8de35cc9cc8p174e09jsn9025d60fec8d',
        'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.err(err))
}

const $form = document.querySelector('#form')
const $ip = document.querySelector('#ip')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { value } = $ip

    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})