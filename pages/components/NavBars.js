import Link from 'next/link';

const NavBars = () => (

    <div>

      <div>
        <Link href="/"><img src="https://i.ibb.co/8bDQPcq/portfolio-icno.png"></img></Link>
      </div>

    <div>
    <Link href="/About"><strong><a>ABOUT</a></strong></Link>
      </div>

       <div>
       <Link href="/Work"><strong><a>WORK</a></strong></Link>
       </div>

     <div>
     <Link href="/contact"><strong><a>CONTACT</a></strong></Link> 
     </div>

     <style jsx>{`
        div{
          text-align: center;
          font-family: 'Barlow', sans-serif;
          font-size: 15px;
          text-decoration-line: none;
          display: flex;
          margin: 10px 10px 22px 12px;
          color: #FF8585;
          cursor: pointer;
          align-items: center;
         justify-content: center;
        }

        a{
          color: #FF8585;
          text-decoration:none;
          margin:5px;
        }
        img{
          height: 45px;
         
        }
      
      `}</style>


     </div>
);

export default NavBars;
