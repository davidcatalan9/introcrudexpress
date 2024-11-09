import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, "../data/data.json");


export const createFile = async (data) => {
  try {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(
      dataFilePath,
      JSON.stringify(data, null, 2),
      "utf-8",
      (err) => {
        throw new Error("error al crear archivo");
      }
    );
  } catch (error) {
    console.log("Error general al crear o guardar archivo", error);
  }
};

export const readFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(`no pudimos leer archivo ${error}`);
    return null;
  }
};

