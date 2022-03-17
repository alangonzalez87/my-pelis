import {  FaSpinner } from 'react-icons/fa';
import Styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={Styles.spinner}>
            <FaSpinner className={Styles.spinning} size={60}/>
        </div>
    )
}

