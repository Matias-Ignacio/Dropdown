import react, { forwardRef } from "react";
import style from "./DropdownContent.module.css";

const DropdownContent = forwardRef((props, ref) => {
    const {children, open} = props;

    return (
        <div className={open ? style.openContent : style.dropdownContent} ref={ref}>
            {children}
            
        </div>
    )
});

export default DropdownContent;