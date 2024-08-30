import { useState } from "react"
import ListaProdutos from "../components/ListaProdutos"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Produtos(){
const [produtos, setProdutos] = useState([{
    nome: "Nada Óbvio",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: " Coleção Risqué & Doritos",
    preco: 8.99,
    imagem: "https://www.risque.com.br/wp-content/uploads/2024/08/Risque%CC%81_Imagens-esmaltes_400x663_nada-obvio.png",
},

{
    nome: "Cravejada no Glitter",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "Livre Pra Brilhar ",
    preco: 5.00,
    imagem: "https://www.risque.com.br/wp-content/uploads/2023/03/Design-sem-nome-54.png",
},

{
    nome: "Uma Abelha me Contou",
    efeito: "Metálico",
    ml: "8 ml",
    colecao: "Bridgerton",
    preco: 9.99,
    imagem: "https://www.risque.com.br/wp-content/uploads/2024/03/7891350042184_1.png",
},

{
    nome: "Chá Verde",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "Bio",
    preco: 6.00,
    imagem: "https://www.risque.com.br/wp-content/uploads/2022/09/Design-sem-nome-77.png",
},

{
    nome: "Start No Seu Poder",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "Nosso Metaverso",
    preco: 7.99,
    imagem: "https://www.risque.com.br/wp-content/uploads/2022/09/Design-sem-nome-94.png",
},

{
    nome: "Pesadão",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "Risqué + Iza ",
    preco: 4.40,
    imagem: "https://www.risque.com.br/wp-content/uploads/2022/03/risque-dandara-azul-pesadao-RGB_final.png",
},

{
    nome: "Preto Caviar",
    efeito: "Cremoso",
    ml: "9.5 ml",
    colecao: "Diamond Gel",
    preco: 9.00,
    imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/img_0004_diamond-preto-pack.png",
},

{
    nome: "Sororideusas",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "Deusas Inspiradoras",
    preco: 8.00,
    imagem: "https://www.risque.com.br/wp-content/uploads/2021/10/Sem-titulo-4.fw_.png",
},

{
    nome: "A Louca Dos Signos",
    efeito: "Metálico",
    ml: "8 ml",
    colecao: "Astrologia em Cores",
    preco: 3.99,
    imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/astrologia-esverdeado-pack.png",
},

{
    nome: "Eu Não, Foi Meu Ascendente",
    efeito: "Metálico Matte",
    ml: "8 ml",
    colecao: "Astrologia em Cores",
    preco: 5.99,
    imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/astrologia-beringela-pack.png",
},

{
    nome: "Creme de Pitaya",
    efeito: "Cobertura Brilhante",
    ml: "9.5 ml",
    colecao: "Diamond Gel",
    preco: 5.90,
    imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/img_0005_diamond-pitaya-pack.png",
},

{
    nome: "Hitou Na NFT",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "Nosso Metaverso",
    preco: 10.00,
    imagem: "https://www.risque.com.br/wp-content/uploads/2022/09/Design-sem-nome-90.png" ,
},

{
    nome: "De Paetê na Avenida",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: " Livre Pra Brilhar",
    preco: 11.50,
    imagem: "https://www.risque.com.br/wp-content/uploads/2023/03/Design-sem-nome-55.png",
},

{
    nome: "How You Doin?",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "Friends",
    preco: 12.00,
    imagem: "https://www.risque.com.br/wp-content/uploads/2021/06/Crem-How-You-Doin.png",
},

{
    nome: "Love Guerreira do Arco-Íris",
    efeito: "Cremoso",
    ml: "8 ml",
    colecao: "K-POP Love",
    preco: 7.00,
    imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/kpop-verde-pack.png",
},   
])
return(
    <div>
        <Header/>
       
    <ListaProdutos listaProdutos={produtos}/>
    <Footer/>
    </div>
);
}