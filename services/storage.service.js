import { promises } from "fs";
import { homedir } from "os";
import { join } from "path";

const filePath = join(homedir(), "weather-data.json");

const APP_DICTIONARY = {
  token: "token",
  city: "city",
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath, "utf8");
    data = JSON.parse(file);
  }
  data[key] = value;

  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data[key];
  }

  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { saveKeyValue, getKeyValue, APP_DICTIONARY };
