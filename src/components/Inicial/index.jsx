import  { useEffect, useState } from 'react';
import './main.css'

export default function Inicial() {
  const [news, setNews] = useState([]); // Estado para armazenar as notícias
  useEffect(() => {
    // Realiza a solicitação à API quando o componente é montado
    fetch('https://api.consumet.org/news/ann/recent-feeds')
      .then((response) => response.json())
      .then((data) => {
      
        setNews(data); // Atualiza o estado com os dados da API
      })
      .catch((error) => {
        console.error('Erro ao buscar notícias:', error);
      });
  }, []); // O segundo argumento vazio faz com que o useEffect seja executado apenas uma vez após a montagem do componente.

  return (
    <div className='row'>
      
        {news.map((item, index) => (
                      <div className='col-md-6' key={index}>
                          <div className='container'>
                    <h2 className='titulo'>{item.title}</h2 >
                    <div className='d-flex'>
                    <p >{item.preview.full}</p>
                    <img src={item.thumbnail} alt="" />
                 

          </div> <div className='a'><a href={item.url}>Listten a news</a>
            </div>  
          </div>
          </div>
        ))}
        
    
   
    </div>
  );
}
