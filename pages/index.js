import NavBars from './components/NavBars';


const Index = () => (    
<div className="wrapper">

<NavBars />
<div>
  <img className="bodyy" src="http://drive.google.com/uc?export=view&id=1lV98EMUufdPAUWD1wLY8tmPxm_delAnC"/>
</div>


    
<footer>
    <img className="icons" src="http://drive.google.com/uc?export=view&id=1KhAw49qHfone5e3m0Ttsi_8M__Eysx5z"/>
</footer>
  
<style jsx>{`
       
        
        .bodyy{
            height: 500px;
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
          height: 280px;
          position: absolute;
          left: -2px;
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