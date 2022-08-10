const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const sendRequest = (method, url)=> {
   return fetch(url)
      .then(response => {
        return response.json()
      })
}

sendRequest('GET', usersUrl)
   .then(data => {
      const cards = data.map((item) => {
         
         return (`
         <div class="userBlock">
						<div class="blockInfo">
							<p class="title">Surname</p>
							<p class="info">${item.name}</p>
						</div>
						<div class="blockInfo">
							<p class="title">Name</p>
							<p class="info">${item.username}</p>
						</div>
						<div class="blockInfo">
							<p class="title">Email</p>
							<p class="info">${item.email}</p>
						</div>
						<div class="blockInfo">
							<p class="title">City</p>
							<p class="info">${item.address.city}</p>
						</div>
						<div class="blockInfo">
							<p class="title">Street</p>
							<p class="info">${item.address.street}</p>
						</div>
						<div class="blockInfo">
							<p class="title">House number</p>
							<p class="info">${item.address.suite}</p>
						</div>
						<div class="blockInfo">
							<p class="title">Phone numberм</p>
							<p class="info">${item.phone}</p>
						</div>
						<div class="blockInf"}>
							<p class="title">Company</p>
							<p class="info">${item.company.name}</p>
						</div>
						<div class="blockInfo">
							<p class="title">Website</p>
							<p class="info">${item.website}</p>
                  </div>
               </div>
         `)
      })
      cards.forEach(element => {
         let users = document.querySelector('.users');
         users.innerHTML = users.innerHTML+element;
      });
   })
   .catch(err => console.error(err))