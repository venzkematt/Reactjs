import { Link } from "react-router-dom";

export function StartPage() {
    return (
        <div>
            <div>
                <h1 style={{textAlign: "center"}}>Hier ist die Startseite meines Portfolios</h1>
            </div>
            <br></br>
            <div style={{textAlign: "center"}}>
                <button style={{color: "red", width: "170px", height: "30px" }}>
                <Link to={"/portfolio"} style={{textDecoration: "none"}}>Hier geht es zum Portfolio</Link>
                </button>
            </div>
        </div>
    )
}