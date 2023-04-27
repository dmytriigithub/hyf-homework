const express = require("express");
const document = require("./document.json");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;


// Support parsing JSON requests
app.use(express.json());
app.use('/search', router);

app.get("/", (req, res) => {
  res.send("This is a search engine");
});



    
router.get('/', async (req, res) => {
  try {
    const searchQuery = req.query.q;
    if (searchQuery){

      const searchResult = await document.filter(i => Object.values(i).some(val => (typeof val === 'string' || typeof val === "number") && val.toString().toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())));
      if (searchResult.length){
        res.send(searchResult)
        return;
      }
      res.status(404)
      throw new Error('Not Found')
    }
    res.send(document);
  }
  catch (error) {
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});




router.get('/document/:id', async (req,res)=>{
  try{
    const idParam = parseInt(req.params.id);
    const response = await document.find(u => u.id == idParam);
    if (!response) {
      res.status(404)
      throw new Error('Not Found')
    }
    res.json(response)
  }
  catch (error) {
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
  
})

router.post('/', async (req, res) => {
  try{
    const { q } = req.query; // get query parameter
    const { fields } = req.body; // get fields object from request body
  
    if (q && fields) {
      // Both q and fields are present, return error
      return res.status(400).json({ error: 'Both q and fields cannot be provided.' });
    }
  
    if (q) {
      // Only q is present, perform search and return results
      const searchQuery = req.query.q;
      if (searchQuery){
  
        const searchResult = await document.filter(i => Object.values(i).some(val => (typeof val === 'string' || typeof val === "number") && val.toString().toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())));
        if (searchResult.length){
          res.send(searchResult)
          return;
        }
        return res.status(404).json({ error: 'Not Found' });
      }
      return res.send(document);
    }
  
    if (fields) {
      // Only fields are present, perform search with filter and return results
      let key;
      let value;
  
      Object.keys(fields).forEach(element => {
        key = element;
      });
      Object.values(fields).forEach(element => {
        value = element;
      });
  
      const result = await document.filter(i => Object.keys(i).includes(key) && Object.values(i).includes(value));

      if(result.length){
        return res.json(result);
      }
      return res.status(404).json({ error: 'Not Found' });
      
    }
  
    // Neither q or fields are present, return error
    return res.status(400).json({ error: 'Either q or fields must be provided.' });
  }
  catch (error) {
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});