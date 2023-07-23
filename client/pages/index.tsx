import style from "@/styles/pages/home.module.scss";
import Image from "next/image";
import persona from "@/public/persona.png"
import button_burger from "@/public/button_container.png"
import button_burger_close from "@/public/button_container_close.png"
import { useState } from "react";
import Link from "next/link";
import HomeNav from "@/components/HomeNav";
//<button className={style.menu_button}>  <Burger></Burger> </button>
              
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
        <main className={style.homepage}>
          <HomeNav/>
          <section className={style.main}>
            <article className={`${style.main_article} ${isOpen ? style.hidden : ''}`}>
              <div className={style.main_article_text}> 
                <h1>ENCUENTRA TU <span className={style.color_orange}>FUERZA</span>. ALCANZA <br/>
                TUS METAS. SE <span className={style.color_orange}>IMPARABLE</span>.</h1>
                <h5>Elige el camino del fitness y conquista tu destino</h5>
                <button className={style.main_button}>Ver Planes</button>
              </div>
              <Image alt="" src={persona} className={style.main_article_image}/>
            </article>
          </section>
        </main>
    </>
  )
}




/*<header className={style.heading}>
<svg width="83" height="68" viewBox="0 0 83 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1807 0.0113633C17.0835 0.000112127 19.9863 0.000112127 22.8928 0.0113633C22.8816 5.69695 22.8891 11.3825 22.8853 17.0681C24.3742 17.0719 25.8594 17.0681 27.3483 17.0681C27.352 19.5021 27.3445 21.9399 27.352 24.3776C25.8631 24.3814 24.3742 24.3814 22.8891 24.3814C22.8853 29.8795 22.8816 35.3775 22.8891 40.8794C19.9863 40.8869 17.0835 40.8869 14.1807 40.8756C14.1882 27.2542 14.1882 13.6328 14.1807 0.0113633Z" fill="white"/>
<path d="M60.1113 0.00378457C63.0104 3.41802e-05 65.9094 3.05176e-05 68.8122 3.05176e-05C68.8122 13.6289 68.8122 27.2541 68.8085 40.883C65.9094 40.883 63.0104 40.883 60.1113 40.883C60.1113 35.3812 60.1113 29.8831 60.1113 24.3813C59.5188 24.3813 58.9337 24.3813 58.3487 24.3813C56.8072 21.9473 55.2583 19.5171 53.7432 17.0681C55.8621 17.0681 57.9886 17.0681 60.1113 17.0643C60.1076 11.3787 60.1076 5.68937 60.1113 0.00378457Z" fill="white"/>
<path d="M6.77696 4.97676C8.65965 4.96925 10.5423 4.973 12.425 4.973C12.425 15.2866 12.425 25.6001 12.425 35.91C10.5423 35.9137 8.66341 35.91 6.78446 35.9137C6.77696 32.0696 6.77696 28.2254 6.78071 24.3813C4.51923 24.3775 2.26148 24.385 0 24.3775C0.00375039 21.9435 -0.00374673 19.5058 0.00375405 17.0718C2.25774 17.068 4.51922 17.068 6.77696 17.0718C6.78446 13.0401 6.77696 9.00842 6.77696 4.97676Z" fill="white"/>
<path d="M70.5635 4.96917C72.4462 4.97292 74.3326 4.96917 76.2153 4.96917C76.2228 9.00084 76.2153 13.0325 76.2191 17.0642C78.4768 17.0679 80.7383 17.0642 82.9998 17.0679C82.996 19.5057 82.9998 21.9434 82.996 24.3849C80.7383 24.3812 78.4768 24.3812 76.2191 24.3849C76.2153 28.2291 76.2228 32.0695 76.2153 35.9174C74.3326 35.9136 72.4499 35.9136 70.5672 35.9174C70.5672 25.6001 70.571 15.2827 70.5635 4.96917Z" fill="white"/>
<path d="M36.3266 11.3785C37.7968 10.3697 40.0357 11.431 40.1783 13.2125C40.2945 16.3178 40.2195 19.4344 40.2195 22.5434C40.2758 23.9123 39.0419 25.2062 37.6618 25.1462C36.2666 25.2137 35.0515 23.8898 35.134 22.5172C35.104 19.6219 35.1302 16.7266 35.1227 13.835C35.0477 12.8712 35.4715 11.8736 36.3266 11.3785Z" fill="white"/>
<path d="M42.6868 12.5336C44.1569 11.551 46.3584 12.6649 46.4559 14.4276C46.5684 17.1016 46.4972 19.7869 46.4934 22.4647C46.5647 24.1824 44.6707 25.6263 43.0656 24.9062C41.8804 24.5874 41.3816 23.2785 41.4041 22.1609C41.3891 19.8994 41.4116 17.6342 41.3966 15.3689C41.3666 14.3226 41.6517 13.0287 42.6868 12.5336Z" fill="white"/>
<path d="M30.307 14.8029C31.7059 14.0153 33.6224 15.0241 33.8699 16.588C34.0612 18.422 33.9112 20.2784 33.9524 22.1199C34.0199 23.275 33.4386 24.5951 32.2385 24.9214C30.7496 25.574 28.9081 24.2951 28.8819 22.6899C28.7956 20.9948 28.8669 19.2996 28.8444 17.6044C28.8256 16.528 29.1857 15.2004 30.307 14.8029Z" fill="white"/>
<path d="M47.6074 19.8433C46.7786 17.7056 49.5726 15.5529 51.4141 16.9518C52.6104 18.1744 53.3342 19.7758 54.3281 21.1635C55.0932 22.4949 56.1583 23.6762 56.7209 25.1164C56.4133 27.3854 55.3182 29.4593 54.5531 31.6008C54.1556 32.5084 54.0018 33.5923 53.2142 34.2673C51.1665 36.105 49.1113 37.924 47.0636 39.7579C48.2862 48.8826 49.5126 58.0073 50.7352 67.1357C44.5921 67.1282 38.449 67.1357 32.3021 67.132C32.2983 57.9135 32.3058 48.6988 32.2983 39.4841C30.2881 38.5053 29.028 36.4351 28.8817 34.2298C28.7092 31.6083 28.8592 28.9793 28.8067 26.3578C32.4371 26.339 36.0712 26.3615 39.7053 26.3428C37.6876 28.4992 35.94 31.042 35.3024 33.9673C34.9536 35.5912 35.0136 37.2676 35.2049 38.9066C35.6549 38.9103 36.1087 38.9141 36.5663 38.9216C35.8799 35.6137 37.0163 32.1221 39.0153 29.4818C42.0306 26.4328 46.3473 25.1876 50.4427 24.3963C49.5276 22.8587 48.3837 21.4522 47.6074 19.8433Z" fill="white"/>
</svg>
<nav className={`${style.heading_nav} ${!isOpen ? style.none : style.flex}`}>
 <Link href="" className={style.a}>Principal</Link>
 <Link href="/membresia" className={style.a}>Membresia</Link>
 <Link href="/entrenadores" className={style.a}>Entrenadores</Link>
 <Link href="/actividades" className={style.a}>Actividades</Link>
 <Link href="/sedes" className={style.a}>Sedes</Link>
</nav>  
<Link href="/login" className={style.heading_button}>Iniciar Sesion</Link>
<button className={style.burger_button} onClick={handleToggleMenu}> 
{!isOpen ? <Image alt="burger" src={button_burger}/> : <Image alt='' src={button_burger_close}/>}
</button>
</header>
*/