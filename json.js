// const user = {

//     id: 122,
//     name: 'masud',
//     lover: {
//         name: 'jamila',
//         favFood: 'pizza'
//     },
//     friend: ['kamal','jamal','samal'],
//     friendsAge: [23, 25,27]
// }
// const userJson= JSON.stringify(user);

// //console.log(userJson);  // {"id":122,"name":"masud"}

// const userFromJson = JSON.parse(userJson);
// //console.log(userFromJson);



   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>  displayUsers(json))


  function displayUsers(users){

    //   console.log("users", users);
      const userNames= users.map(user => user.username);
      const ul = document.getElementById("users-container");
      //console.log(userNames);

        for(let i=0; i < userNames.length; i++){
          const userName= userNames[i];
           
          const li= document.createElement("li");
          li.innerText= userName;
          ul.appendChild(li);

      }
  }