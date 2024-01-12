import "../style/selfMe_style.css";

export default function SelfMe() {
  return (
    <div className="sectionMain" style={{backgroundColor: "#101010"}}>
      <div>
        <h2>Sobre mim</h2>
      </div>
      <div className="containerSectionSelfMe">
        <div>
          <img src="./self.png" className="img-self" />
        </div>

        <div className="containerDesc">
          <h2 className="sub">Minha Descrição</h2>
          <p className="text">
            Olá eu sou o Evandro criador desta mesma página, Sou estudante,
            gosto de muita coisa e uma delas é a tecnologia. O meu desejo pela
            tecnologia veio desde que eu era mais pequeno, mas veio a crescer
            consideravelmente após eu ter tido o primeiro contacto com a
            programação entre os meus 14 e 15 anos de idade. Tenho como conceito
            que , todo mundo deveria aprender programar, pois programar não é só
            digitar códigos, é uma das formas de termos uma mente mais aberta
            para um leque de ideias, e capacidade racional suficiente para
            resolver problemas reais.
          </p>
        </div>
      </div>
    </div>
  );
}
