import "../style/sectionMyProject_style.css";
import CardProjects from "./CardProjects";

export default function SectionMyProject(props) {
  return (
    <div className="sectionMain 02" style={{backgroundColor: "#101010"}}>
        <h2 >
            Meus Projectos
        </h2>
        <div className="containerCardProjects">
            <CardProjects uri={"./intelecto.png"} title={"intelecto.ao"}/>
            <CardProjects uri={"./luaitech.png"} title={"luaitech.com"}/>
            <CardProjects uri={"./currency.png"} title={"Currency Converter"}/>
        </div>
    </div>
  );
}
