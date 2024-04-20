import './styles/NotamField.css';
import FieldInfo from "./FieldInfo";

import {useState} from "react";

function NotamField(props) {
    const [zobrazit, setIsVisible] = useState(false);

    function toggle() {
        setIsVisible(wasVisible => !wasVisible);
    }

    return (
        <div className="notamField"
             onClick={toggle}>
            {props.parse}
            {zobrazit && (<FieldInfo zobraztext={props.info}/>)}
        </div>
    );
}

export default NotamField;