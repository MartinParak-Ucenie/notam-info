import Card from "./blocks/Card";
import './App.css';

function App() {
    const notamLines = [
        //   first line
        {
            series: "B",
            seriesText: "Text k prvemu policku NOTAMu",
            continuityNumber: "0015",
            year: "24",
            notamLabel: "NOTAM",
            type: "N"
        },
        // Q-Line (Qualifier Line)
        {
            lineStart: "Q)",
            fir: "EGTT", //London FIR (Flight Information Region)
            notamCode1: "Q", //always "Q"
            notamCode2: "MR", //Runway
            notamCode3: "HI", //Covered by Ice
            traffic: "I", // "I" = Instrument Flight Rules, "V" = Visual Flight Rules, "K" = NOTAM is a checklist
            purpose: "NBO", // "N" = NOTAM selected for the immediate attention of aircraft operators,
                            // "B" = NOTAM selected for pre-flight information briefing
                            // "O" = NOTAM concerning flight operations
                            // "M" = Miscellaneous NOTAM; not subject for briefing, but is available on request
                            // "K" = NOTAM is a Checklist
            scope: "A", // "A" = Aerodrome
                        // "E" = Enroute
                        // "W" = Navigation Warning
                        // "K" = Checklist
            lowerLimit: "000",
            upperLimit: "999",
            latitude: "513050N",
            longitude: "003048W",
            radius: "015"
        }
    ]
    return (
        <div className="app-container">
            <Card field={notamLines}></Card>
        </div>
    );
}

export default App;
