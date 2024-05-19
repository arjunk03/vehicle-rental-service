const BASE_URL = "http://127.0.0.1:5000/vrs/category";

const getVehCatgryDetalsService = async () => {
console.log("getVehCatgryDetalsServicegetVehCatgryDetalsService")

const responsedata = await fetch(BASE_URL);

console.dir("responsedata : ", responsedata);
const vehCatData = await responsedata.json()
console.log(" vehCatData  service: ", vehCatData)
return vehCatData
  
};

const addVehCatgryDetalsService = async (data) => {
  console.log(data);
  let responsedata = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("responsedata : ", responsedata);
};

const updateVehCatgryDetals = () => {};

const deleteVehCatgryDetals = () => {};
