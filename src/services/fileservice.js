import fs from "fs";
import path from "path";

const dataFilePath = path.join(__dirname, "../data/data.json");

const createFile = () => { 
    try {
        fs.writeFile(dataFilePath, JSON.stringify(data))
    } catch (error) {
        
    }
}
