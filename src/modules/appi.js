const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aao50JlseR7Au1b7QTF2/scores/';

export const getData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return  data.result
    }
    catch (error){
        return error
    }
};

export const postData = async (score) =>{
    try{
        const result = await fetch(url, {
            method: "POST", 
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(score),
        })
        return result;
    }catch(error){
        return error
    }
};