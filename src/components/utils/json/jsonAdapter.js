import { load, dump } from "js-yaml";
import { csv2json, json2csv } from "json-2-csv";
import { parse } from "jsonc-parser";
import jxon from "jxon";
import toml from "toml";

const keyExists = (obj, key) => {
  if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
    return false;
  } else if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const result = keyExists(obj[i], key);

      if (result) {
        return result;
      }
    }
  } else {
    for (const k in obj) {
      const result = keyExists(obj[k], key);

      if (result) {
        return result;
      }
    }
  }

  return false;
};

const contentToJson = async (value, format = FileFormat.JSON) => {
  try {
    let json = {};

    if (format === FileFormat.JSON) json = parse(value);
    if (format === FileFormat.YAML) json = load(value);
    if (format === FileFormat.XML) json = jxon.stringToJs(value);
    if (format === FileFormat.TOML) json = toml.parse(value);
    if (format === FileFormat.CSV) json = await csv2json(value);
    if (format === FileFormat.XML && keyExists(json, "parsererror")) throw Error("Unknown error!");

    if (!json) throw Error("Invalid JSON!");

    return Promise.resolve(json);
  } catch (error) {
    throw error;
  }
};

const jsonToContent = async (json, format) => {
  try {
    let contents = json;

    if (!json) return json;
    if (format === FileFormat.JSON) contents = json;
    if (format === FileFormat.YAML) contents = dump(parse(json));
    if (format === FileFormat.XML) contents = dump(parse(json));
    if (format === FileFormat.TOML) contents = dump(parse(json));
    if (format === FileFormat.CSV) contents = await json2csv(parse(json));

    return Promise.resolve(contents);
  } catch (error) {
    throw error;
  }
};

export { contentToJson, jsonToContent };

const FileFormat = {
  "JSON" : "json",
  "YAML" : "yaml",
  "XML" : "xml",
  "TOML" : "toml",
  "CSV" : "csv",
}
