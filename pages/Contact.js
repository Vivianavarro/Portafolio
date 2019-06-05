import NavBars from './components/NavBars';

const Contact = () => (

<div>
   
<NavBars />

<p className="block1">¡Hola! ¿Tienes preguntas? 😉💬📲
</p>



<div className="itemSocial"> 
  <a href="https://www.linkedin.com/in/vivianavarronavarro/" target="_blank"><img className="linkedin" src="http://drive.google.com/uc?export=view&id=1zP-CM77ZzARkoBqycbBaSzpECF04VJxy"/></a><br></br>
  <a href="mailto:nitoname@gmail.com" target="_blank"><img className="gmail" src="http://drive.google.com/uc?export=view&id=1FGrxLhrHGsmVzCte0XtX9Rh1TtgFwh1M"/></a><br></br>
  <a href="https://twitter.com/nitoname" target="_blank"><img className="gmail" src="http://drive.google.com/uc?export=view&id=1tP-yFTLc52nBsNpDn8IB-MKTDmpGF9iC"/></a> 
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
      .linkedin, .gmail{
        height: 75px;
      }
      .itemSocial{
        text-align:center;
      }
   img{
     margin: 10px;
   }
      `}</style>
</div>

);

export default Contact;