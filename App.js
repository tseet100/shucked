// import './App.css';
// import Header from './src/Header';
// import AddForm from './src/AddForm';
// import Entries from './src/Entries';

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const exphbs = require('express-handlebars');
const MongoStore = require('connect-mongo')(session);

//load config
dotenv.config({path: './config/config.env'});

//passport config
require('./config/passport')(passport);

connectDB();

const app = express();

//logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//sessions
app.use(
  session({
    secret: 'ssecrret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
  })
);

//passport middlware
app.use(passport.initialize());
app.use(passport.session());

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

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
