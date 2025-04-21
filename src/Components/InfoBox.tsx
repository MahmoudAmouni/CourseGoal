import { ReactNode } from "react"

interface HBProps {
  children: ReactNode;
  mode: "hint";
}
interface WBProps {
  children: ReactNode;
  mode: "warning";
  severity:"low" | "medium" | "high"
}

type IBProps = WBProps | HBProps;
export default function InfoBox(props:IBProps) {
    const {children} = props
    if(props.mode==="hint"){
        return (
          <aside className="infobox infobox-hint">
            <p>{children}</p>
          </aside>
        );
    }
    const {severity} = props
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  
}
