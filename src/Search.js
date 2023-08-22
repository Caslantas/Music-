import axios from 'axios'
import React, { useState,useMemo } from 'react'

const Search = () => {
   const[search,setSearch]=useState("")
   const[result,setResult]=useState([])
   const[showResult,setShowResult]=useState(false)
   const apiPath="/song/id"
   const options = useMemo(()=>({
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
    params: {
      q: search,
      per_page: '10',
      page: '1',
    },
    headers: {
      'X-RapidAPI-Key':
        '4556765a4fmsha4ddc57b29c4ca2p14673fjsn83f56d165000',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  }),[search])

   const api=async()=>{
    try {
        const result = await axios.request(options);
        console.log(result.data);
        setResult(result.data.hits)
        setShowResult(true)
        setSearch('')
    } catch (error) {
        console.error(error);
    }
   }
  
  const handleClick=(e)=>{
    e.preventDefault()
    if(search!==""){
    
      api()
    }
    
  }

  return (
    <div className='container'>
    <form>
    <label>Ne Dinlemek İstersin?</label>
    <input type='Search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
  
    </form>
    <button onClick={handleClick} style={{width:'80px',margin:'10px',border:'none',borderRadius:'10px',height:'30px',backgroundColor:'#333' ,color:'#fff'}}>Ara</button>
    {showResult && result.length>0 &&(
        <div className='container-item'>
       
        <ul>
          {result.map((item) => (
            <li key={item.result.id}>
              <p>{item.result.artist_names}</p>
              <a href={item.result.url} target="_blank" rel="noopener noreferrer">
                 <img style={{width:'350px',height:'350px'}}
            src={item.result.header_image_url}
            alt="Şarkı Başlık Resmi"
          />
            </a>
        
            
            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
  )
}

export default Search