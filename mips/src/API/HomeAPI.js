import axios from 'axios';


export const fetchUserTinData = async (userName) => {
    try {
      const response = await axios.get(`https://localhost:7030/Home/GetFacilityTINs?UserName=${userName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user tins:', error);
      throw error;
    }

  };

export const fetchUserTINNpiData = async(tin, userName) =>{
  try{
    const response = await axios.get(`https://localhost:7030/Home/PhysicianRecordCounts?TIN=${tin}&&UserName=${userName}`);
    return response.data;
  }catch(error){
    console.error('Error fetching user tin npis:', error);
      throw error;
  }
}
  