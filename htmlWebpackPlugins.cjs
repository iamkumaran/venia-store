/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_ROOT = `${__dirname}`;
const staticFolderPath = path.join(SOURCE_ROOT, `/static/`);
// array of relative path to the HTML files
const htmlFiles = fs
  .readdirSync(staticFolderPath)
  .filter(fileName => path.extname(fileName) === '.html')
  .map(fileName => path.resolve(__dirname, `${staticFolderPath}${fileName}`));

const multipleHtmlPlugins = htmlFiles.map(htmlFile => {
  const name = path.basename(htmlFile);
  return new HtmlWebpackPlugin({
    template: htmlFile, // relative path to the HTML files
    filename: name, // output HTML files
    // chunks: [`${name}`] // respective JS files
  });
});

module.exports = multipleHtmlPlugins;
