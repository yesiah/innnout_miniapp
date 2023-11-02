function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('index');
  htmlOutput.search = '';
  return htmlOutput.evaluate();
}
  