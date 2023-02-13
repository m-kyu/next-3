const fs = require('fs');
let users = require('data/users.json');
  
export default function handler(req, res) {
    let {method,query} = req;
    switch(method){
        case "GET" : getData()
        break;
        case "POST" : postData();
        break;
    }
  

  function getData(id='all'){
    return res.status(200).json(users)
  }

  function postData(){
    users.push(req.body)
    saveData();    
  }
  
  function saveData(){
    fs.writeFileSync('data/users.json',JSON.stringify(users))
  }
}