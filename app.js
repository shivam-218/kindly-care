const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");

const register = require("./models/market");

const port = process.env.PORT || 3000;

// const static se html ko bula rhe
const static_path = path.join(__dirname, "public");

const template_path = path.join(__dirname, "templates/views");
// ye bta rha kha jaana hai
const partials_path = path.join(__dirname, "templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
//agar ye nhi hota to app.get res send hello from we dikhta
//but ab public me jaake html css pe le jaega

//ab index.html delted becuase hbs use karenge
//file index hbs le islie use app.set

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    //render se hbs dikhega
    res.render("index")
  });

  app.get('/login', (req, res) => {
    //render se hbs dikhega
    res.render("login");
  });


  app.get('/register', (req, res) => {
    //render se hbs dikhega
    res.render("register");
  });

  app.get('/cowin', (req, res) => {
    //render se hbs dikhega
    res.render("cowin");
  });

  app.get('/blog', (req, res) => {
    //render se hbs dikhega
    res.render("blog");
  });

  app.get('/symp', (req, res) => {
    //render se hbs dikhega
    res.render("symp");
  });

  app.get('/HELLOBS', (req, res) => {
    //render se hbs dikhega
    res.render("index");
  });


  // now creating user in datapose app.post se

  app.post('/register',async (req, res) => {
    try{
// console.log(req.body.emailid);
// res.send(req.body.emailid);
const registerForm = new register({
name : req.body.name,
emai : req.body.emai,
telephone : req.body.telephone,
state : req.body.state,
city : req.body.city,
message: req.body.message,
proof : req.body.proof

})

// now saving data

const registered = registerForm.save();
res.status(201).render("form");

    }
    catch(error)
    {
      res.status(400).send(error);
    }
  
  });


  app.listen(port, () =>
  {
    console.log("server runs bro")  
  })