// import './App.css';
// import Header from './src/Header';
// import AddForm from './src/AddForm';
// import Entries from './src/Entries';

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

//load config
dotenv.config({path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 5000;

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
