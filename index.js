#!/usr/bin/env node
var argv = require('yargs').argv;
var pdfService = require('./pdf_service');

const filePath = argv.filepath;
const excludedVat = argv.ignore;

if(!filePath) {
  throw new Error('no file');
}

pdfService(filePath)
  .then(function(vats) {
    if (excludedVat) {
      vats = vats.filter(function(vat) { return vat != excludedVat });
    }
    console.log('VAT exported:', vats);
  })
  .catch(function(error) {
    console.log(error)
  });
