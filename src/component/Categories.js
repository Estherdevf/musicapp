import React from'react';
import Playlists from './Playlists'



const Categories =(props) =>{
    
    const dataCategories=[
     {
         id:1,
         name:'Ivoiry coast music',
         tagline:'',
        
     },

     {
         id:2,
         name:'Nigeria music',
         tagline:'',
     },

     {
         id:3,
         name:'Congolaise music',
         tagline:'',
     },

    ]
  
    return(
         <div className="mainInner">
            {dataCategories.map((category,id)=>(
                   <div className="cardWrap" key={id} onclick={props.}>
                     <h2>{category.name}</h2>
                     <Playlists category_id= {category.id} />
                   </div>
                     ))}
        </div>
    )
}

export default Categories