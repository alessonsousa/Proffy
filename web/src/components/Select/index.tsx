import React, {SelectHTMLAttributes} from 'react';

import './styles.css';

interface Selectprops extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
   label: string;
   option: Array<{
       value: string;
       label: string;
   }>;
}
const Select: React.FC<Selectprops> = ({label, name, option, ...rest}) =>{
    return (
        <div className="Select-block">
        <label htmlFor={name}>{label}</label>
        <select id={name} {...rest}>
            <option value="" disabled selected hidden>Selecione a Opção</option>
            {option.map(option  => {
                return <option key={option.value} value={option.value}>{option.label}</option>
            })}
            </select>
        </div>
    );
    
}

export default Select;