#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const inquirer = require("inquirer");
const figlet = require("figlet");
const shelljs = require("shelljs");
const fs = require("fs");

clear();
console.log(chalk.red(figlet.textSync("MBAR", { horizontalLayout: "fitted" })));

console.log(
  chalk.green("Welcome to MBAR! A backup and restore solution for MongoDB")
);

const initQuestion = [
  {
    type: "list",
    name: "action",
    message: "Please select an action",
    choices: ["Backup", "Restore"],
    default: "Backup"
  }
];

const backupQuestion = [
  {
    type: "input",
    name: "host",
    message: "Hostname",
    default: "localhost"
  },
  {
    type: "input",
    name: "port",
    message: "Port",
    default: "27017"
  },
  {
    type: "input",
    name: "database",
    message: "Database Name",
    validate: input => {
      if (!input) {
        return "Please provide a database name";
      }
      return true;
    }
  },
  {
    type: "input",
    name: "collection",
    message: "Collection Name",
    validate: input => {
      if (!input) {
        return "Please provide a collection name";
      }
      return true;
    }
  },
  {
    type: "input",
    name: "output",
    message: "Output directory",
    default: `${process.cwd()}/dump`
  }
];

const restoreQuestion = [
  {
    type: "input",
    name: "host",
    message: "Hostname",
    default: "localhost"
  },
  {
    type: "input",
    name: "port",
    message: "Port",
    default: "27017"
  },
  {
    type: "input",
    name: "database",
    message: "Database Name",
    validate: input => {
      if (!input) {
        return "Please provide a database name";
      }
      return true;
    }
  },
  {
    type: "input",
    name: "collection",
    message: "Collection Name",
    validate: input => {
      if (!input) {
        return "Please provide a collection name";
      }
      return true;
    }
  },
  {
    type: "input",
    name: "source",
    message: "Source directory",
    default: `${process.cwd()}/dump`
  }
];

(async () => {
  this.backup = backup;
  this.restore = restore;
  const backupRestore = await inquirer.prompt(initQuestion);
  console.log(backupRestore, this);

  await this[backupRestore.action.toLowerCase()]();

  async function restore(params) {
    await selfDefaultValues();
    console.log("Create Restore");
    const { host, port, database, collection, source } = await inquirer.prompt(
      backupQuestion
    );
    let command = ["mongodump"];
    host && (command = command.concat(["-h", host]));
    port && (command = command.concat(["-p", port]));
    database && (command = command.concat(["-d", database]));
    collection && (command = command.concat(["-c", collection]));
    source && (command = command.concat([source]));
    shelljs.echo("\n");
    try {
      await shelljs.exec(command.join(" "));
      shelljs.echo(`${chalk.green("Byee")}`);
    } catch (error) {
      shelljs.echo(`${chalk.red(error)}`);
      shelljs.exit();
    }
  }

  async function backup(params) {
    console.log("Create Backup");
    const { host, port, database, collection, output } = await inquirer.prompt(
      backupQuestion
    );
    let command = ["mongodump"];
    host && (command = command.concat(["-h", host]));
    port && (command = command.concat(["-p", port]));
    database && (command = command.concat(["-d", database]));
    collection && (command = command.concat(["-c", collection]));
    output && (command = command.concat(["-o", output]));
    shelljs.echo("\n");
    try {
      await shelljs.exec(command.join(" "));
      shelljs.echo(`${chalk.green("Byee")}`);
    } catch (error) {
      shelljs.echo(`${chalk.red(error)}`);
      shelljs.exit();
    }
  }
  async function selfDefaultValues() {
    const path = [process.cwd(), "/dump"];
    const dumpFolderExists = fs.existsSync(path.join(""));
    if (!dumpFolderExists) {
      return;
    }
    const dumpDir = fs.readdirSync(path.join(""));
    if (!dumpDir.length) {
      return;
    }
    path.push(`${dumpDir[0]}`);

    const dbSubFolders = fs.readdirSync(path.join(""));
    if (!dbSubFolders.length) {
      return;
    }
    const dbIndex = restoreQuestion.findIndex(
      question => question.name === "database"
    );
    const collectionIndex = restoreQuestion.findIndex(
      question => question.name === "collection"
    );
    const sourceIndex = restoreQuestion.findIndex(
      question => question.name === "source"
    );
    const collection = dbSubFolders[0].split(".")[0];
    const db = dumpDir[0];
    const source = `${process.cwd()}/dump/${db}/${collection}.bson`;
    restoreQuestion[dbIndex].default = db;
    restoreQuestion[collectionIndex].default = collection;
    restoreQuestion[sourceIndex].default = source;
  }
})();
