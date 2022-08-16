#!/usr/bin/env node
import { getArgs } from "./helpers/helpers.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не передан токен");
    return;
  }

  try {
    await saveKeyValue("token", token);
    printSuccess("Токен сохранен");
  } catch (e) {
    printError(e.message);
  }
};

const initCli = () => {
	const args = getArgs(process.argv);
	if(args.h) {
		printHelp();
	}
	if(args.s) {
		//City
	}
	if(args.t) {
		return saveToken(args.t);
	}
};

initCli();
