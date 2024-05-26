const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()

app.use(cors())
app.use(bodyParser.json())

const demoItems= [
    {

        id:1,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    },
    {
        id:2,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    },
    {
        id:3,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    },
    {
        id:4,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    },
    {
        id:5,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    },
    {
        id:6,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    },
    {
        id:7,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    }
    ,
    {
        id:8,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    },{
        id:8,
        title:"Components",
        description:"Lorem ipsum is the dummy text of the printing and typesetting industry"
    }

]

const users = [];

app.get('/api/getitem', (req, res)=> {


    res.json(demoItems)

}) 

app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
  
        const existingUser = users.find((user) => user.email === email);
  
    if (existingUser) {
      
      res.status(400).json({ message: 'User already exists' });
    } else {
    
      const newUser = { email, password };
      users.push(newUser);
  
    
      res.json({ message: 'Registration successful' });
    }
  });



  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
  
    const user = users.find((user) => user.email === email && user.password === password);
  
    if (user) {
    
      res.json({ message: 'Login successful' });
    } else {
      
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });

app.listen(5000, () => {

    console.log("Server running on the port 5000")
})