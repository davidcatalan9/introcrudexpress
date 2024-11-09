import { readFile, createFile } from "../services/fileservice.js";

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
