import React, {useState} from "react";
import Sidebar from "./Sidebar";
import ItemDetails from "./ItemDetails";

import  "./CatalogueFrame.css"
function CatalogueFrame({item}){
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="catalogue-layout">
            <div className="sidebar">
                <Sidebar onItemClick={handleItemClick} />
            </div>
            <div className="main-content">
                <ItemDetails item={selectedItem} />
            </div>
        </div>
    );
};

export default CatalogueFrame;