
const BASE_URL = 'http://127.0.0.1:5000/vrs/category'

const getVehCatgryDetals = () => {

}


const addVehCatgryDetals = async (data) => {

    console.log(data)
   let responsedata = await  fetch(BASE_URL, {
    'method' : "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   } )

   console.log("responsedata : ", responsedata)

}

const updateVehCatgryDetals = () => {

}

const deleteVehCatgryDetals = () => {

}