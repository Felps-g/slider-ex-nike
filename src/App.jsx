import { useState } from 'react'
import './App.css'
import Ja1 from './assets/ja1.avif'
import Genisus from './assets/nike-genisus.avif'
import Tatum from './assets/nike-tatum3.avif'
import Slider1 from './assets/slider1.png'
import Slider2 from './assets/slider2.png'
import Slider3 from './assets/slider3.png'
import Slider4 from './assets/slider4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Ja1} alt="" className="img-card" />
              <h2 className="titulo-card">Ja Morant 1</h2>
              <p className="desc">Ja Morant se tornou o superstar que é hoje ao afundar repetidamente jumpers em aros tortos, pular em pneus de trator e driblar em cones de trânsito nos verões úmidos da Carolina do Sul. O Ja 1 é uma prova de sua ascensão. Com uma unidade Air Zoom, suporta saltos altos e hipervelocidade sem sacrificar o conforto, para que você possa controlar seu próprio destino na quadra, no estilo Ja.</p>
              <p className="preco">R$ 899,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Genisus} alt="" className="img-card" />
              <h2 className="titulo-card">Lebron NXXT Genisus</h2>
              <p className="desc">Com malha leve e de suporte e amortecimento Air Zoom flexível para velocidade em todos os jogos, o LeBron NXXT Genisus oferece as ferramentas necessárias para redefinir o jogo.</p>
              <p className="preco">R$ 999,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Tatum} alt="" className="img-card" />
              <h2 className="titulo-card">Tatum 3</h2>
              <p className="desc">Pronto para se destacar? Uma mistura suave de tie-dye e jeans desgastado confere ao Tatum 3 uma versão casual, porém colorida, que certamente chamará a atenção. O ajuste ajustado, o design leve e a tecnologia pronta para as quadras, como a espuma Cushlon 3.0, ajudam você a entrar e sair da ação.</p>
              <p className="preco">R$ 1.199,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/VnE7m8JI7MY?si=Jpz6IR-ZimzikNKY" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>

          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
