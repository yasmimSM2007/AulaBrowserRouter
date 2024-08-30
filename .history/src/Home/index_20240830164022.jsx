import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Carousel } from 'react-responsive-carousel'
import ListaProdutos from "../components/ListaProdutos"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ListaProdutos from "../components/ListaProdutos"

export default function Home (){
    const [ produtos, setProdutos ] = useState ([{
      nome: "Sua Majestade A Rainha",
      efeito: "Metálico",
      ml: "8 ml",
      colecao: "Bridgerton",
      preco: 8.59,
      imagem: "https://www.risque.com.br/wp-content/uploads/2024/03/7891350042191_1.png",
    },


    {
        nome: "Sou Topping",
        efeito: "Cremoso ",
        ml: "8 ml",
        colecao: "Risqué & Doritos",
        preco: 8.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2024/08/Risque%CC%81_Imagens-esmaltes_400x663_topping.png",
    },

    {
        nome: "Bloody Mary Vibes",
        efeito: "Cremoso",
        ml: "9.5 ml",
        colecao: "Diamond Gel Mix & Drinks",
        preco: 11.20,
        imagem: "https://www.risque.com.br/wp-content/uploads/2021/12/Bloody-Mary-Vibes_png.png",
    },

    {
        nome: "Oceano Azul",
        efeito: "Cremoso",
        ml: "9 ml",
        colecao: "BIO",
        preco: 12.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2022/09/Design-sem-nome-80.png",
    },

    {
        nome: "Sem Filtro",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Reinventando o Normal",
        preco: 6.90,
        imagem: "https://www.risque.com.br/wp-content/uploads/2023/04/Design-sem-nome-65.png",
    }
    ])

    return(
<>
<Header/>
<Carousel
infiniteLoop
useKetboardArrows
autoPlay
showArrows={true}
showStatus={false}
showThumbs={false}
dynamicHeight
>
    <div>
<img src="https://www.risque.com.br/wp-content/uploads/2023/03/Risque-Desk.png"></img>
    </div>
    <div>
<img src="https://www.risque.com.br/wp-content/uploads/2024/08/Risque_Doritos_Banner_1349x618.png"></img>
    </div>
    <div>
<img src="https://www.risque.com.br/wp-content/uploads/2024/08/Risque_Promo-Ikesaki_Banner_1349x618-1.png"></img>
    </div>
    <div>
<img src="https://www.risque.com.br/wp-content/uploads/2022/09/Risque_Nosso-Metaverso_Banner_1349x618-copy.jpg"></img>
    </div>
    </Carousel>
    <div class="titulo">
        <h1>RISQUÉ</h1>
        <h4>Best-sellers</h4>
    </div>
    <ListaProdutos listaProdutos={produtos}/>
    <Footer/>
    </>
    )
}