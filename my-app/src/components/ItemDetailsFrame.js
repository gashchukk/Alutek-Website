import React from 'react';
import './ItemDetailsFrame.css';

const ItemDetailsFrame = ({ item }) => {
    return (
        <div className="item-details">
            {item ? (
                <>
                    <h2>{item.name}</h2>
                    <div className="item-details-container"> {/* New container for image and description */}
                        <div className="item-description">
                            <p>{item.description}</p>
                        </div>
                        <img className="item-image" src={item.imageCut} style={{width: "300px"}}/>

                    </div>
                    <img className="item-color" src="/AvailableColors.png" style={{ width: '500px', height: '700px' }} />
                </>
            ) : (
                <p>Select an item from the sidebar to view its details.</p>
            )}
        </div>
    );
};

export default ItemDetailsFrame;
