import "../style/sectionMySkills_style.css";

export default function SectionMySkills(props) {
  return (
    <div className="sectionMain">
      <h2 className="Tit">Minhas Skills</h2>
      <div className="containerMySkills">
      <div className="section">
        <img src="./Soft-skills.png" className="img-self" />
      </div>

      <div className="containerLogo section">
        <div>
          <img src="./javascript-logo.png" className="img-logo" />
          <img src="./h.png" className="img-logo" />
          <img src="./css.png" className="img-logo" />
        </div>

        <div>
          <img src="./php.png" className="img-logo" />
          <img src="./laravel.png" className="img-logo" />
          <img src="./wordpress.png" className="img-logo" />
        </div>

        <div>
          <img src="./react.png" className="img-logo" />
          <img src="./python.png" className="img-logo" />
          <img src="./bootstrap.png" className="img-logo" />
        </div>

        <div>
          <img src="./git.png" className="img-logo" />
          <img src="./mysql.png" className="img-logo" />
          <img src="./bootstrap.png" className="img-logo" />
        </div>
      </div>
      
      </div>
    </div>
  );
}
