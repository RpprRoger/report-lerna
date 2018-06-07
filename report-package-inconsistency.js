#!/usr/bin/env node
const { writeFileSync } = require('fs');
const { join } = require('path');
const collectPackages = require('@lerna/collect-packages');

const repoDir = process.pwd();

return console.log(repoDir);

const addAndReport = (deps, newDeps = {}, name) => {
  Object.keys(newDeps).forEach(packageName => {
    const version = newDeps[packageName];

    if (deps[packageName] && deps[packageName] !== version) {
      console.warn(`packageName missmatch in ${name}!`);
    } else {
      deps[packageName] = version;
    }
  });
};

(async () => {
  const packages = await collectPackages(repoDir);
  const {
    repository,
    author, // TODO: Remove this if there's ever more than one author
    license,
    bugs,
    homepage,
  } = require(join(repoDir, 'package.json'));
  const allDeps = {};

  for (const lernaPackage of packages) {
    const oldPackage = require(lernaPackage.manifestLocation);

    const { dependencies, devDependencies } = oldPackage;

    addAndReport(allDeps, dependencies, `${oldPackage.name}.dependencies`);
    addAndReport(
      allDeps,
      devDependencies,
      `${oldPackage.name}.devDependencies`
    );

    // const newPackage = {
    //   ...oldPackage,
    //   repository,
    //   author, // TODO: Remove this if there's ever more than one author
    //   license,
    //   bugs,
    //   homepage,
    // };

    // writeFileSync(
    //   lernaPackage.manifestLocation,
    //   JSON.stringify(newPackage, null, '  ')
    // );
  }
})().catch(err => {
  console.error(err);
});
