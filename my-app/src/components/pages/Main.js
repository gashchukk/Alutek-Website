import React from 'react';
import MainBanner from "../MainBanner";
import ImageRow from "../ImageRow";
import ImageWithText from "../ImageWithText";
function Main() {
    return(
        <>
            <MainBanner/>
            <div style={{backgroundColor: "black"}}>
                <h1 style={{display: "flex", justifyContent: "center", color: "white", padding: "50px"}}> Чому ми?</h1>
                <div style={{ padding: "30px"}}><ImageRow/></div>
            </div>
            <div style={{backgroundColor: "black" }}>
                <h1 style={{padding:"50px", display:"flex", justifyContent:"center", color:"white"}}>Що таке алюмінієвий профіль Alutek</h1>
                {/*<ImageWithText/>*/}
            </div>
        </>
    );
}

export default Main;