import { ReactNode } from "react"

interface IBProps{
    children:ReactNode,
    mode:"hint" | "warning"
}
export default function InfoBox({children,mode}:IBProps) {
    if(mode==="hint"){
        return (
          <aside className="infobox infobox-hint">
            <p>{children}</p>
          </aside>
        );
    }
    return (
      <aside className="infobox infobox-warning warning--medium">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  
}
