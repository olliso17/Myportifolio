import { ReactNode } from "react";
import "./Container.css";

type Childrens={
    children: ReactNode,
    className : string
}

export default function Container(props:Childrens){
    return <div className={props.className}>
        {props.children}
    </div>
    
}