import React from 'react';
import MainBanner from "../MainBanner";
import ImageRow from "../ImageRow";
import ImageWithText from "../ImageWithText";
import ImageFrames from "../ImageFrames";
import PhoneNumberPopup from "../PhoneNumberPopup";
function Main() {
    return(
        <>
            <MainBanner/>
            <PhoneNumberPopup delay={5000}/>
            <div style={{backgroundColor: "black"}}>
                <h1 style={{display: "flex", justifyContent: "center", color: "white", padding: "50px"}}> Чому ми?</h1>
                <div style={{ padding: "30px"}}><ImageRow/></div>
            </div>
            <div style={{backgroundColor: "black" }}>
                <h1 style={{padding:"50px", display:"flex", justifyContent:"center", color:"white"}}>Що таке алюмінієвий профіль Alutek</h1>
                <ImageWithText imageUrl={"/aluminium-glass-frame-profile-139.jpg"} text={"Алюмінієвий профіль від компанії Alutek - це сучасні технологічні рішення для будівельноїта меблевої промисловості. Наші продукти відзначаються високою якістю матеріалу та точністю виготовлення, що забезпечує надійністьта довговічність конструкцій. Ми пропонуємо широкий асортимент профілів для різноманітних застосувань, включаючи вікна, двері, фасади, меблі та інші вироби.Наша компанія забезпечує індивідуальний підхід до кожного клієнта, гарантуючи відмінну якість, швидку доставку та професійний сервіс."}/>
            </div>
            <div className="catalogue" style={{backgroundColor: "black",display:"flex", justifyContent:"center", color:"white"}}>
                <h1 style={{color:"white"}}> Каталог Товарів</h1>
                <ImageFrames/>
            </div>
        </>
    );
}

export default Main;