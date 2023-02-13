import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Update = () => {
  const router = useRouter();
  const {id,obj} = router.query;
  const [elInput, setInput] = useState('');
useEffect(()=>{
  let object = JSON.parse(obj);
  setInput(object.name)
},[])
  function edit(e){    
    e.preventDefault();
    axios.put(`/api/${id}`,{'id':id, 'name':elInput})        
    router.push('/List')
  }
  return (
    <div>
        <h2>update</h2>
        <form onSubmit={edit}>
            <input type="text" value={elInput} onChange={(e)=>setInput(e.target.value)} />
            <input type="submit" />
        </form>

    </div>
  )
}

export default Update