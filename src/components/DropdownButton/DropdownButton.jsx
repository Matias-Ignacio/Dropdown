import react, { forwardRef } from "react";
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import style from "./DropdownButton.module.css";

const DropdownButton = forwardRef((props, ref) => {
    const {children, open, toggle} = props;

    return (
        <div onClick={toggle} className={open ? style.buttonOpen : style.dropdownBtn} ref={ref}>
            {children}
            <span className={style.toggleIcon}>
                { open ? <FaChevronUp /> : <FaChevronDown />}
            </span>
        </div>
    )
});

export default DropdownButton;