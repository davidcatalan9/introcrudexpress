import fs from "fs";
import path from "path";

const dataFilePath = path.join(__dirname, "../data/data.json");

export const createFile = () => { 
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(data), 'utf-8')
    } catch (error) {
       console.log('Error general al crear o guardar archivo', error); 
    }
}




export const createData = async(data) => {
    await createData(data)
}