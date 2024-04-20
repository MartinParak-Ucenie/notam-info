import './styles/FieldInfo.css';

const FieldInfo = (props) =>  {
    return (
        <div className="field-info">
            { <div> {props.zobraztext} </div>}
        </div>
    );
}

export default FieldInfo;