import Navbar from "../components/Navbar";
import "../style/home_style.css";
import Button_Links from "../components/Button_links";
import SelfMe from "../components/SelfMe";
import CardServices from "../components/CardServices";
import SectionMySkills from "../components/SectionMySkills";
import SectionMyProject from "../components/SectionMyProject";


export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="banner">
        <h1 className="diferent">Bom dia</h1>
        <h1>Eu sou o Evandro</h1>
        <h1>Desenvolvedor/Fullstack</h1>
        <div className="container-citation">
          <p className="text">
            Tenho como conceito que , todo mundo deveria aprender programar,
            pois programar não é só digitar códigos, é uma das formas de termos
            uma mente mais aberta para um leque de ideias, e capacidade racional
            suficiente para resolver problemas reais.
          </p>
        </div>
        <div className="container-btn">
          <Button_Links title="Baixar CV" uri="#" />
          <Button_Links title="Contacte-me" uri="#" />
        </div>
        <img
          src="./js-logo.png"
          className="img"
          style={{
            top: "70%",
            left: "20%",
          }}
        />
        <img
          src="./js-logo.png"
          className="img"
          style={{
            top: "70%",
            left: "75%",
          }}
        />
        <img
          src="./js-logo.png"
          className="img"
          style={{
            top: "15%",
            left: "20%",
          }}
        />
        <img
          src="./js-logo.png"
          className="img"
          style={{
            top: "15%",
            left: "75%",
          }}
        />
      </div>

      <div className="container-footer-scrolling">
        <div>
          <span>Autodidata</span>
          <span>Programador</span>
          <span>Curioso</span>
          <span>Estudante</span>
          <span>Fullstack</span>
          <span>Colaborativo</span>
          <span>Cristão</span>
          <span>Junior</span>
          <span>Sempre Aprendendo</span>
          <span>Criando</span>
          <span>Recriando</span>
          <span>Inconformado</span>
          <span>Ativo</span>
          <span>Sempre ON</span>
        </div>
      </div>
      <div className="containerServices">
        <CardServices/>
        <CardServices/>
        <CardServices/>
      </div>
      <SelfMe/>
      <SectionMySkills/>
      <SectionMyProject/>
    </div>
  );
}
