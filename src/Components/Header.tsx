import { ReactNode } from "react";

interface HProps{
    img:{src:string , alt:string},
    children:ReactNode
}
export default function Header({img,children}:HProps) {
    const {src,alt} = img;
  return (
    <div>
    <img src={src} alt={alt}/>
    {children}
    </div>
  )
}
