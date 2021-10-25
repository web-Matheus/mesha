import React,{useState}from 'react';
import {StyledContainer} from './styled/weatherstyled'
function  Weather() {
    const [state, setstate] = useState([])
     // eslint-disable-next-line
    const [input,setinput] = useState('')

    function handlesubmit(){
        if(input!==""){
             const url = `http://api.weatherapi.com/v1/current.json?key=e686fa1ce0c943b5990174803211210&q=${input}&aqi=no`
            fetch(url)
            .then(res => res.json())
            .then(data => setstate([data]));
        }
        
        }
    
        return (
            <StyledContainer>  
                <h1>Consulte as condições climáticas de qualquer cidade</h1>
                
                    <input type="text" placeholder={"city name"} />
                    <button onClick={handlesubmit}>Procurar</button>
            
        
          
                {state.map((item,key)=>{
                    return(
                        <section key={key}>
                         <h1>{item.location.name}</h1> 
                         <span>{item.location.localtime}</span>
                         <img src={item.current.condition.icon} alt={item.location.name}/>
                         
                         <h2>{item.current.temp_c}°</h2>
                        
                         <p>{item.current.condition.text}</p> 
                        
                        </section>
                    )
                })}

                    

               
            </StyledContainer>
        );
    };
  export default Weather;
