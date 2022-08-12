import "./../../css/components-css/Card.css";

export default Card;

function Card(props) {
  return <div className={props.className + " card"}>{props.children}</div>;
}
