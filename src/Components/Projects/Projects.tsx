import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Osaka from '../../assets/Osaka.png'
import AmazounPrime from '../../assets/AmazounPrime.png'
import BookMarker from '../../assets/BookMarker.png'
import CarNews from '../../assets/CarNews.png'
import Crud from '../../assets/Crud.png'
import Daniels from '../../assets/Daniels.png'
import Devfolio from '../../assets/Devfolio.png'
import Fakeboos from '../../assets/Fakeboos.png'
import Mealify from '../../assets/Mealify.png'
import Meals from '../../assets/Meals.png'
import Notta from '../../assets/Notta.png'
import Recipes from '../../assets/Recipes.png'
import Weather from '../../assets/Weather.png'
import noon3ab7alim from '../../assets/noon3ab7alim.png'
import smartLogin from '../../assets/smartLogin.png'
import Fokir from '../../assets/Fokir.png'
import _3ab7alim from '../../assets/3ab7alim.png'
import Project from "../Project/Project";
export default function Projects() {
    console.log(smartLogin)
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="projects" className="bg-gray-800 p-10">
          <h2 className="text-center text-white text-4xl mb-10 font-bold">PROJECTS</h2>
          <div className="slider-container">
      <Slider {...settings}>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/noon-3ab7alim" demo="https://noon-3ab7alim-888.vercel.app/" features="Html,Css,Tailwind,TypeScrpit,React" img={ noon3ab7alim } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/fakeboos" demo="https://fakeboos.vercel.app/" features="Html,Css,Tailwind,TypeScript,Mui,Next" img={ Fakeboos } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Amazon-prime" demo="https://amazon-prime-henna-three.vercel.app" features="Html,Css,Tailwind,JavaScript,React" img={ AmazounPrime } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/notta" demo="https://notta-black.vercel.app" features="Html,Css,Tailwind,JavaScript,React" img={ Notta } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/meals" demo="https://meals-gold.vercel.app" features="Html,Css,Tailwind,TypeScript,React" img={ Meals } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/weather" demo="https://weather-sandy-theta.vercel.app" features="Html,Css,Bootstrap,JavaScript(Fetch)" img={ Weather } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Cars-News" demo="https://cars-news.vercel.app" features="Html,Css,Bootstrap,JavaScript(AJAX)" img={ CarNews } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Crud" demo="https://crud-nu-vert.vercel.app" features="Html,Css,Bootstrap,JavaScript" img={ Crud } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Login" demo="https://osaka-olive.vercel.app/" features="Html,Css,Bootstrap,JavaScript" img={ smartLogin } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/recpices" demo="https://recpices.vercel.app" features="Html,Css,Bootstrap,JavaScript" img={ Recipes } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/BookMarker" demo="https://book-marker-kappa.vercel.app" features="Html,Css,Bootstrap,JavaScript" img={ BookMarker } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Daniels" demo="https://daniels-bay.vercel.app" features="Html,Css,Bootstrap" img={ Daniels } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Osaka" demo="https://osaka-olive.vercel.app/" features="Html,Css,Bootstrap" img={ Osaka } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/DevFolio" demo="https://dev-folio-ashy.vercel.app" features="Html,Css,Bootstrap" img={ Devfolio } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Mealify" demo="https://mealify-ruddy.vercel.app" features="Html,Css(flex-Grid)" img={ Mealify } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/3ab7alim" demo="https://3ab7alim.vercel.app" features="Html,Css(Flex)" img={ _3ab7alim } />          
        </div>
        <div>
            <Project code="https://github.com/MohamedAbdalhalem/Fokir" demo="https://fokir-nu.vercel.app" features="Html,Css(Flout)" img={ Fokir } />          
        </div>
      </Slider>
    </div>
    </div>
  )
}
