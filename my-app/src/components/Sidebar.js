// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onItemClick }) => {
    const items = [
        { id: 119, name: '119 Profile', description:"Не симетричний профіль відкритого типу, найпопулярніший та найдосвідченіший тип ручки", imageCut: "/119.png" },
        { id: 120, name: '120 Profile', description:"Симетричний профіль, відкритого типу, відомий своєю надйнійстю та стійкістю" , imageCut: "/120.png"},
        { id: 800, name: '800 Profile', description:"Найтонший профіль з усієї лінійки, на відміну від інших видів профілю, наповнення зʼєднюєтсья за допомогою клею" , imageCut: "/800.png"},


    ];

    return (
        <div className="sidebar" style={{width:"300px"}}>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() => onItemClick(item)}>
                        <div className="item-container" style={{display:"flex",justifyContent:"center"}}>
                            <span className="item-number">{item.id}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;