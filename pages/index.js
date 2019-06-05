import NavBars from './components/NavBars';


const Index = () => (    
<div className="wrapper">

<NavBars />
<div>
  <img className="bodyy" src="http://drive.google.com/uc?export=view&id=1ghRKNZzlTJslwAGwe29cRBBoX93ar2NQ"/>
</div>


    
<footer>
    <img className="icons" src="http://drive.google.com/uc?export=view&id=1KhAw49qHfone5e3m0Ttsi_8M__Eysx5z"/>
</footer>
  
<style jsx>{`
       
        
        .bodyy{
            height: 450px;
            position: absolute;
            top: 13%;
            left: 25%;
        }
        .icons{
          height:45px;
        }
        footer{
          border-top-style: solid;
          display: block;
          position: absolute;
          bottom: 3%;
          right: 39%;
          border-top-color: #FF8585;
          border-top-width: thin;         
        }
        
        @media (max-width: 500px){
        .bodyy{
          height: 260px;
          position: absolute;
          left: 17px;
          bottom: 0;
          top: 142px;
         
        }
          .icons{
            height: 37px;           
        }
        footer{
          position: fixed;
          left: 31px;
          bottom: 32px;   
          border-top-style: none;     
        }
       
      `}</style>

</div>

  );
  
  export default Index;