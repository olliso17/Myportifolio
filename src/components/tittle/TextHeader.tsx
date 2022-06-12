import '../tittle/TextHeader.css';
import '../container/Container.css';

type HeaderTittle = {
    name :string,
    linkedin :string,
    zap : string,
    instagram: string
    class : string    
}
export default function TextHeader (props:HeaderTittle){
    return <div className={props.class}>
        <h1>{props.name}</h1>
        <ul>
            <li>{props.linkedin}</li>
            <li>{props.zap}</li>
            <li>{props.instagram}</li>
        </ul>
    </div>
}