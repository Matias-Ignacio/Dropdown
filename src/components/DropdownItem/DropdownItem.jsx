import react from "react";
import style from "./DropdownItem.module.css";


const DropdownItem = ({children, onClick}) => {

    return (
        <div className={style.dropdownItem} onClick={onClick}>
            {children}
        </div>
    )
};

export default DropdownItem;