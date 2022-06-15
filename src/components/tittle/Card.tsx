import '../tittle/Card.css';
import '../container/Container.css';
import { ReactNode } from 'react';

type HeaderTittle = {
    class: string   
    children?:ReactNode 

}
export default function Card (props:HeaderTittle){
    return <div className={props.class}>
          {props.children}
        
    </div>
}