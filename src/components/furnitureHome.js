import React from "react";
import Nav from "./Nav";
import SideBar from "./SiderBar";
import CardCoustom from "./Card_coustom";

export default function FurnitureHome(){
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
