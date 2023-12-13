// importar
import Promo from "../componentes/Promo";
import "../hojas-de-estilo/Promos.css";
import promo_Hamburguesa_extra_carne from "../imagenes/promo_Hamburguesa_extra_carne.png";
import promo_Hamburguesa_con_bebida_y_papas2 from "../imagenes/promo_Hamburguesa_con_bebida_y_papas2.png";
import promo_Hamburguesa_con_papas from "../imagenes/promo_Hamburguesa_con_papas.png";
import promo_Hamburguesa_doble_mas_doble_papas from "../imagenes/promo_Hamburguesa_doble_mas_doble_papas.png";
import promo_Hamburguesa_super from "../imagenes/promo_Hamburguesa_super.png";
import promo_Hamburguesa_simple from "../imagenes/promo_Hamburguesa_simple.png";
//pagina de promos al e-commerce
export function Promos(){
    return (         
    <> 
      <main className="promos__main">
        <header className="promos__header">
             <h1 className="promos__header__titulo">PROMOS</h1>  
        </header>

        <section className="promos__promo">
            <Promo
             nombre1_promo ="90.00$"
             nombre_promo ="Hamburguesa con extra carne"
             imagen = {promo_Hamburguesa_extra_carne}
             id="1"

            />
            <Promo
             nombre1_promo ="110.00$"
             nombre_promo ="Hamburguesa con bebida y papas"
             imagen = {promo_Hamburguesa_con_bebida_y_papas2}
             id="2"
            />
            <Promo
             nombre1_promo ="80.00$"
             nombre_promo ="Hamburguesa con papas"
             imagen = {promo_Hamburguesa_con_papas}
             id="3"
            />
            <Promo
             nombre1_promo ="120.00$"
             nombre_promo ="Hamburguesa doble mas doble papas"
             imagen = {promo_Hamburguesa_doble_mas_doble_papas}
             id="4"
            />
            <Promo
             nombre1_promo ="110.00$"
             nombre_promo ="Hamburguesa super"
             imagen = {promo_Hamburguesa_super}
             id="5"
            />
            <Promo
             nombre1_promo ="65.00$"
             nombre_promo ="Hamburguesa simple"
             imagen = {promo_Hamburguesa_simple}
             id="6"
            />            
        </section>
        
      </main>

    </>

    ); 
}
// esto es para exportar la pagina web o el componente
export default Promos;




