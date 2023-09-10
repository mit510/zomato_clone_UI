import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'
import Delivery from '../../components/delivery'
import DiningOut from '../../components/dining'
import Nightlife from '../../components/nightlife'
function HomePage() {

    const [activeTab , setActiveTab] = useState("Delivery")
  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  );
};
const getCorrectScreen = (tab)=>{
    switch (tab){
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/> 
        case "Nightlife":
            return <Nightlife/>
        default:
            return <Delivery/>
    }
}

export default HomePage