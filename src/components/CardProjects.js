import "../style/cardProjects_style.css";

export default function CardProjects(props) {
  return (
    <div className="containerCardProject">
      <div className="containerSubcard">
        <div className="containerImgProject">
          <img src={props.uri} />
        </div>
        
        <div className="descCard">
          <h3 style={{textOverflow: "ellipsis",
  textWrap: "nowrap", overflow: "hidden"}}>{props.title}</h3>
          <p>
            Olá eu sou o Evandro criador desta mesma página, Sou estudante, é a
            tecnologia.
          </p>
        </div>
        <div className="containertitleCard">
          <div className="titleCard">
            <div className="icon">V</div>
            <h3>Ver Projecto</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
