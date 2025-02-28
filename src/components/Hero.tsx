import hero from '../assets/hero.jpeg'

function Hero() {
    return (
      <section className='relative flex items-center justify-center' style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',

      }}>
        <h1 className='relative z-20 font-semibold max-w-6xl text-6xl text-white text-center'>
          Servicio de venta y reparación de 
          smartphones, tablets y computadoras
        </h1>
        <div className='absolute w-full h-full top-0 bg-black opacity-50 z-10'></div>
      </section>
    );
  }
  
  export default Hero;
  