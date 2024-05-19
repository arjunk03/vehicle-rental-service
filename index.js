const dvVeh = document.querySelector("#dv-vehicles")
const dvVehCateg = document.querySelector("#dv-veh-category")
const dvListCateg = document.querySelector("#dv-list-categ")
const dvAddCateg = document.querySelector("#dv-add-categ")
const dvListVeh = document.querySelector("#dv-list-veh")
const dvAddVeh = document.querySelector("#dv-add-veh")
const aVeh = document.querySelector("#a-vehicle")
const aVehCateg = document.querySelector("#a-category")
// const aVeh = document.querySelector("#a-vehicle")
// const aVehCateg = document.querySelector("#a-category")


window.addEventListener("load", () => {
    dvVeh.style.visibility = "hidden";    
    dvVehCateg.style.visibility = "visible" ;
    viewvehicleCategTab()
    hidevehicleTab()
    // dvListCateg.style.visibility = "hidden";
    // dvAddCateg.style.visibility = "visible";
});


aVeh.addEventListener("click", () => {
    console.log("enter veh click")
    dvVeh.style.visibility = "visible";    
    dvVehCateg.style.visibility = "hidden" ;
    viewvehicleTab()
    hideehicleCategTab()
    // dvListVeh.style.visibility = "hidden";
    // dvAddVeh.style.visibility = "visible";

});

aVehCateg.addEventListener("click", () => {
    console.log("enter veh categ click")
    dvVeh.style.visibility = "hidden";    
    dvVehCateg.style.visibility = "visible" ;
    viewvehicleCategTab()
    hidevehicleTab()
    // dvListCateg.style.visibility = "hidden";
    // dvAddCateg.style.visibility = "visible";
    
});

function viewvehicleTab()
{
    dvListVeh.style.visibility = "hidden";
    dvAddVeh.style.visibility = "visible";
}

function hidevehicleTab()
{
    dvListVeh.style.visibility = "hidden";
    dvAddVeh.style.visibility = "hidden";
}

function viewvehicleCategTab()
{
    dvListCateg.style.visibility = "hidden";
    dvAddCateg.style.visibility = "visible";

}

function hideehicleCategTab()
{
    dvListCateg.style.visibility = "hidden";
    dvAddCateg.style.visibility = "hidden";

}