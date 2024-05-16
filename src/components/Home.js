import React from "react";
import Nav from "../components/Nav";
import SideBar from "../components/SiderBar";
import CardCoustom from "../components/Card_coustom";

export default function Home(){
    return(
        <div className=" flex-col">
            <Nav/>
            <div class="flex h-screen border-spacing-3 border border-white   shadow-xl">
                <SideBar/>
                <div class="flex-grow  p-5 grid grid-cols-3 overflow-auto">
                    <CardCoustom buttonName={"Read more"}/> 
                    <CardCoustom buttonName={"Read more"}/> 
                    <CardCoustom buttonName={"Read more"}/> 
                    <CardCoustom buttonName={"Read more"}/> 
                    <CardCoustom buttonName={"Read more"}/> 
                    <CardCoustom buttonName={"Read more"}/> 
                    <CardCoustom buttonName={"Read more"}/> 
                </div>
            </div>
            
        </div>
    )
}