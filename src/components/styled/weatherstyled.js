import styled from "styled-components"

export const StyledContainer = styled.div`
 h1{
     text-align:center;
 }
 input{
     padding:.7rem;
     width:200px;
     display:block;
     margin:0 auto;

 }
 button{
     color:white;
     background-color:black;
     display:block;
     margin:0 auto ;
     margin-top:20px;
     padding:.6rem;
     border:none;
     cursor:pointer;
 }
 section{
     margin-top:100px;
     margin:0 auto;
     background-color:rgb(245,245,245);
     width:400px;
     height: 350px;
     text-align:center;
     border-radius: 10px;
     box-shadow: 5px 5px 10px 10px grey;
     h1{
        font-size:2.7rem;
     }
     h2{
         font-size:2rem;
         
     }
     img{
        display:block;
        margin:0 auto;
     }
     span{
         color:gray;
         max-width:1rem;
         margin-top:-50px;
         
     }
     p{
        
         font-size:1.5rem;
     }
 }

`