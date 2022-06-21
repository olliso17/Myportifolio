import '../button/Button.css';
import '../container/Container.css';
import { ReactNode } from 'react';

type ButtonCard = {
    class: string   
    children?:ReactNode
    onClick?:React.MouseEvent<HTMLButtonElement>;

}
export default function Button (props:ButtonCard){
    return <button className={props.class} onClick={()=>props.onClick}>
          {props.children}
        
    </button>
}