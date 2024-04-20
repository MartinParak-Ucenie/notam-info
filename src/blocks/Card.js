import './styles/Card.css';
import NotamLine1 from "./NotamLine1";

function Card(props) {
    return (
        <div className="card">
            <NotamLine1 firstLine={props.field[0]}></NotamLine1>
        </div>
    );
}

export default Card;