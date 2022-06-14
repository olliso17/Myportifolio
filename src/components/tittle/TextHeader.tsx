import '../tittle/TextHeader.css';
import '../container/Container.css';

type HeaderTittle = {
    name :string,
 
    class : string    
}
export default function TextHeader (props:HeaderTittle){
    return <div className={props.class}>
        <h1>{props.name}</h1>
    </div>
}