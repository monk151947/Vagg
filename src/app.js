console.log("App is running!");

// Jsx - Javascript xml
const  template = [
<div>
  <p>This is react application!</p>
  <h1>Here is the list</h1>
  <ol>
    <li>Item One</li>
    <li>Item Two</li>
  </ol>
</div>
];

// variable
const name = 'Jaggu'

// object
const user = {
  name: 'Jagdish',
  age: 30,
  location: 'Belgaum'
}
const  template1 = [
<div>
  <p>My details</p>
  <h1>{name}</h1>
  <p> Name : {user.name}</p>
  <p>Age   : {user.age} </p>
  <p> location : {user.location}</p>
  <ol>
    <li>Belgavi</li>
    <li>Sadashiv Nagar</li>
  </ol>
</div>
];


const appRoot = document.getElementById('app');
const appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(template1, appRoot1);
