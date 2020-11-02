// import './App.css';
// import Header from './src/Header';
// import AddForm from './src/AddForm';
// import Entries from './src/Entries';

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

//load config
dotenv.config({path: './config/config.env'});

connectDB();

const app = express();

//logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <AddForm />
//       <Entries />
//     </div>
//   );
// }

// export default App;
