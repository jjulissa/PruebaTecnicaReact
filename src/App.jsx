import { useEffect, useState } from "react"



const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact" 
// const CAT_IMAGE_URL = "https://cataas.com"

export default function App() {
  
  const [fact, setFact] = useState () 
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => { 

    fetch(CAT_ENDPOINT_RANDOM_FACT) 
    .then(res => res.json()) 
    .then(data => { 
      const {fact} = data 
      setFact (data.fact) 

      const firstWord = fact.split('')[0] 
      console.log(firstWord); 

      // Si quieres las 3 primeras palabras, join nan juntar letra yo pu u, fe yn sel mo. 
      const tresPrimerasPalabras = fact.split('').slice(0, 3).join('')
      console.log(tresPrimerasPalabras);  

      // Si quieres las 3 primeras palabras, Ou Fe kodLa Pi Kout, Paske SPLIT, gen yn 2nd parametro, 
      const tresPrimerasPalabra = fact.split('', 3).join('')
      console.log(tresPrimerasPalabra);  

      // https://cataas.com/cat/says/hello 

      // https://cataas.com/cat/says/${tresPrimerasPalabra}?size=50&color=red&json=true 

      fetch(`https://cataas.com/cat/says/${tresPrimerasPalabra}?size=50&color=red&json=true`)
        
        .then(res => res.json()) 
        .then(response => {  
          // const url  = response 
          
          const { _id } = response
          const url = `/cat/${_id}/says/${tresPrimerasPalabra}`
          console.log(response); 

          setImgUrl(`https://cataas.com${url}`)  

          // setImgUrl(url)
        }) 



    }) 

    .catch(error => console.log(error))


  }, [])


  
  return (
    <> 
      <main> 
        <h1>App de Gatos</h1> 
        {/* <p>{fact}</p>  */}
        {fact && <p>{fact}</p>} 
        {imgUrl && <img src={imgUrl} alt="Cat"/>} 

        {/* {imgUrl && <img width="30%" src={`${CAT_IMAGE_URL}${imgUrl}`} alt="Cat"/>} */}
      </main>
      
    </>
  )
}


