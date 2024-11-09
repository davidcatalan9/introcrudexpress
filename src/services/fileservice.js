import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, "../data/data.json");

console.log(__dirname);
console.log(__filename);
console.log(dataFilePath);
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

export const createData = async (data) => {
  const dataFile = await readFile();
  let dataJson = null;
  // const dataJson = Array.isArray(dataFile) ? dataFile : [];
  // dataJson.push(newData);
  // if (!dataFile || dataFile.length === 0) {
  //   dataJson = [data];
  // } else {
  //   dataJson = [...dataFile, data];
  // }
  !dataFile || dataFile.length === 0
    ? (dataJson = [data])
    : (dataJson = [...dataFile, data]);

  await createFile(dataJson);
};

export const getAllData = async () => {
  const data = await readFile();
  return data;
};
