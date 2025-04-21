import { ReactNode } from "react";

interface HProps{
    img:{src:string , alt:string},
    children:ReactNode
}
export default function Header({img,children}:HProps) {
    const {src,alt} = img;
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
}
