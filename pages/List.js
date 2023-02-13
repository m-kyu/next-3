import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const List = () => {
  const [data,setData] = useState([]);
  const router = useRouter();

  useEffect(()=>{
    get();
  },[data])

  function get(){
    axios('/api')
    .then(res=>{
        setData(res.data);
    })
  }

  function edit(id,obj){
console.log(obj)
    router.push({pathname:'/Update',query:{id,obj:JSON.stringify(obj)}})
  }

  function del(id){    
    axios.delete(`/api/${id}`);
    setData([id]);
  }

  if(!data) return (<>loading....</>)
  return (
    <div>
        {
            data.map(obj=>(
                <p key={obj.id}> 
                    {obj.name} 
                    <button onClick={()=>edit(obj.id, obj)}>수정</button>
                    <button onClick={()=>del(obj.id)}>삭제</button>
                </p>
            ))
        }
    </div>
  )
}

export default List