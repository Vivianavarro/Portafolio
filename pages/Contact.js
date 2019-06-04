import NavBars from './components/NavBars';

const Contact = () => (

<div>
   
<NavBars />

<p className="block1">!Hola! ¿Tienes preguntas?<br></br>
😉💬📲</p>

<p>Búscame en <strong>Twitter, LinkedIn</strong> o por <strong>Mail</strong></p>

<div className="itemSocial"> 
  <img className="linkedin" src="http://drive.google.com/uc?export=view&id=1vUbH8I4NgDPwVCxif9C3ZpBdKWD-FsMF"/>
</div>





<style jsx>{`
      p{   
        font-family: 'Barlow', sans-serif;
        color: #515050;
        line-height: 163%;
        text-align: center;
        padding: 3% 5% 0% 5%; 
      }
      .block1{
        font-size:24px;
      }
      strong{
        color:#01DBFF;
      }
      .linkedin{
        height: 85px;
      }
   
      `}</style>
</div>

);

export default Contact;