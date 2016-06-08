"use strict"
const fs = require('fs'),
  p = require('path')
/**
 * load all files in given path directory
 * @param path
 * @returns {*}
 */
exports.generateDirectoryModules = function(path){
  return fs.readdirSync(path)
    .filter( (file) => file != 'index.js' )
    .filter( (file) => p.extname(file)  == '.js')
    .reduce( (result, file) => {
      let name = file.replace('.js', '')

      result[name] = require( path + "/" + file)

      return result
    }, {})
}