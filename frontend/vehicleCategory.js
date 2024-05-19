const btnAddCat = document.querySelector("#btn-add-ctgry");
const inptVehCat = document.querySelector("#inpt-veh-catgry");
const txtAreaCatDescr = document.querySelector("#txt-area-categry-description");
const tblCategry =document.querySelector("#tab-category")

btnAddCat.addEventListener("click", () => {
  let vehCatgry = inptVehCat.value;
  // console.log(vehCatgry)
  let catgryDescr = txtAreaCatDescr.value;
  // console.log(catgryDescr)

  const data = {
    category: vehCatgry,
    catgryDescr: catgryDescr,
  };

  addVehCatgryDetalsService(data);
  clearVehCategoryFields()
});

const clearVehCategoryFields = () => {

    inptVehCat.value = '';
    txtAreaCatDescr.value = '';
}

const getVehCatgryDetals = () => {
    const data =  getVehCatgryDetalsService().then(data => {
        console.log("inside prms :", data)
        return data
    })

    data.then(items => {
        
        for (let item of items)
            {
                console.log("item : ", item["categ_name"])
                let tr = document.createElement("tr")

                for (var property in item) {
                    if (!item.hasOwnProperty(property)) continue;
                
                    let td = document.createElement("td")
                let property_val = document.createTextNode(item[property]);
                console.log(" property : ", property)
                console.log(" property_val :", property_val)
                td.appendChild(property_val);
                tr.appendChild(td);
                }

                console.dir(" tr : ", tr)


                tblCategry.appendChild(tr)

            }
        
    })
    return data
}
