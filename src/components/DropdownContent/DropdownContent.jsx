import react, { forwardRef } from "react";
import style from "./DropdownContent.module.css";

const DropdownContent = forwardRef((props, ref) => {
    const {children, open, top} = props;

    return (
        <div className={open ? style.openContent : style.dropdownContent} ref={ref}
         style={{top: top ? `${top}px` : "100%"}}>
            {children}
            
        </div>
    )
});

export default DropdownContent;