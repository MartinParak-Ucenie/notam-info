import './styles/NotamLine1.css';

import NotamField from "./NotamField";
import NotamSlash from "./NotamSlash";

function NotamLine1(props) {
    return (
        <div>
            <NotamField parse={props.firstLine.series} info={props.firstLine.seriesText}></NotamField>
            {/*<NotamField parse={[props.firstLine.continuityNumber]}></NotamField>*/}
            <NotamSlash/>
            {/*<NotamField parse={[props.firstLine.year]}></NotamField>*/}
        </div>
    );
}


export default NotamLine1;