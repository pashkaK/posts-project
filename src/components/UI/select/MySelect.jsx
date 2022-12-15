import React from "react";
import cl from './mySelect.module.css'
const MySelect = ({ options, defaultValue, value, onChange}) => {
  return (
      <div className={cl.select__wrapper}>
          <select className={cl.select}
                  value={value}
                  onChange={event => onChange(event.target.value)}
          >
              <option  disabled value="">{defaultValue}</option>
              {options.map(option =>
                  <option key={option.value} value={option.value}>{option.name}</option>
              )}
          </select>
      </div>

  );
};

export default MySelect;
