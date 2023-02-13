import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'


const Write = () => {
  const [elInput, setInput] = useState('');
  const router = useRouter();

  function write(e){
    
    e.preventDefault();
    axios.post('/api',{'id':Date.now().toString(), 'name':elInput})        
    router.push('/List')
  }
  return (
    <div>
        <h2>write</h2>
        <form onSubmit={write}>
            <input type="text" value={elInput} onChange={(e)=>setInput(e.target.value)} />
            <input type="submit" />
        </form>

    </div>
  )
}

export default Write