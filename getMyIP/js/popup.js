const options = {
	method: 'GET',
	headers: {

	}
};

fetch('https://api.ipify.org?format=json', options)
	.then(response => response.json())
	.then(response => {

        console.log(response);
        document.getElementById("myIp").textContent = "IP: " + response.ip;    
    })
	.catch(err => console.error(err));


