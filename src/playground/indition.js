console.log('App.js is running!');

const app = {
  title: 'Todo app',
  description: 'Hello its todo app!',
  options: []
}


const template = (
  <div>
    <h1>{app.title}</h1>
    {app.description && <p>{app.description}</p>}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
