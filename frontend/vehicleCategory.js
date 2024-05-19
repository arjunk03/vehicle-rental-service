const btnAddCat = document.querySelector("#btn-add-ctgry");
const inptVehCat = document.querySelector("#inpt-veh-catgry");
const txtAreaCatDescr = document.querySelector("#txt-area-categry-description");

btnAddCat.addEventListener("click", () => {
   
    let vehCatgry = inptVehCat.value
    // console.log(vehCatgry)
    let catgryDescr = txtAreaCatDescr.value
    // console.log(catgryDescr)

    const data = {
        "category" : vehCatgry,
        "catgryDescr" : catgryDescr
    }

    addVehCatgryDetals(data)

});
