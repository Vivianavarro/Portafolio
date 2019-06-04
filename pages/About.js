import NavBars from './components/NavBars';

const About = () => (

    <div>
        
<NavBars />

<p><strong className="inicial">Inicié</strong> mi educación profesional en <br></br>
la escuela de <strong className="pinkcolor">Diseño de Bellas Artes</strong>, <br></br>
al descubrir ciertas habilidades decidí<br></br>
girar hacia la <strong className="pinkcolor">comunicación digital</strong>.</p> 

<div className="item1">
<p><strong className="inicial">Hoy</strong>, camino en el mundo del <br></br>
<strong className="bluecolor">desarrollo web</strong>. Me gusta idear <br></br>
soluciones plasmadas en <br></br>
<strong className="bluecolor">productos digitales</strong>.<br></br>
💗💻</p> 
</div>

<img src="https://i.ibb.co/TB1QHgh/about-portafolio.png"/>

<div className="item2">
<p className="pcita"><strong>"Lo único constante, es el cambio."</strong><br></br>
<strong className="cita">Heráclito.</strong></p>
</div>

<style jsx>{`
       p{   
        font-family: 'Barlow', sans-serif;
        color: #515050;
        line-height: 163%;
        text-align: right;
        padding: 3% 5% 0% 5%; 
      }

    .cita{
        font-size:11px;
    }

    .pcita{
      text-align: right;
      padding: 5% 5% 0% 5%;
      font-size:11px;
    }

      div{
          text-align: center;
      }

      .inicial{
          font-size: 27px;
      }

      .pinkcolor{
          color: #FF8585;
      }

      .bluecolor{
          color:#01DBFF;
      }
      
      img{
          height: 300px;
          position: fixed;
          top:  53%;
          left: 0%;
      }

      @media only screen and (min-width: 730px) {
        img{
          height: 550px;
          position: fixed;
          top:20%;
          left: 5%;
        }
         p{
            text-align: right;
            font-size: 18px;
        }
      }

      @media only screen and (min-width: 950px){
          .pcita, p{
              text-align: center;

          }
      }
    
      `}</style>
   
    </div>
    
    );
    
    export default About;