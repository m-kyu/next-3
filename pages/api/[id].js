const fs = require('fs');
let users = require('data/users.json');
  
  export default function handler(req, res) {
    let {method,query} = req;
    switch(method){
        case "GET" : getData()
        break;
        case "PUT" : editData();
        break;
        case "DELETE" : delData();
        break;
    }

  function getData(){
      let user = users.find(obj=>obj.id === req.query.id)
      // saveData();
      return res.status(200).json(user)
  }

  function editData(){
    let user = users.find(obj=>obj.id === req.body.id);
    Object.assign(user,req.body);

    saveData();
    return res.status(200).json({})
  }
    
  function delData(){
    users = users.filter(obj=>obj.id !== req.query.id)
    saveData();
    return res.status(200).json({})
  }
  
  function saveData(){
    fs.writeFileSync('data/users.json',JSON.stringify(users))
  }
  
}
  