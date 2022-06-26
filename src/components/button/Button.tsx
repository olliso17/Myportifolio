import '../button/Button.css';
import '../container/Container.css';
import { ReactNode } from 'react';

type ButtonCard = {
    class: string   
    children?:ReactNode
    onClick?:React.MouseEvent<HTMLButtonElement>;
    href?: string;
    target?:string
}
export default function Button (props:ButtonCard){
    return <a href={props.href} className={props.class} target={props.target} onClick={()=>props.onClick}>
          {props.children}
        
    </a>
}