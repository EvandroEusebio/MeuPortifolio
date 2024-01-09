import "../style/button_style.css";

export default function Button_Links(props) {
  return (
    <a href={props.uri} className="button">
      <div>
        <p>{props.title}</p>
      </div>
    </a>
  );
}
