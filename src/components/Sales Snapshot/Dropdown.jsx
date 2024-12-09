import React, { useState } from "react";
import "./Dropdown/Dropdown.css";
import { FaSlidersH } from "react-icons/fa";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(options[0].label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedLabel(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-text">{selectedLabel}</span>
        <FaSlidersH className="dropdown-icon" />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div>
            {options.map((option) => (
              <div
                key={option.value}
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
