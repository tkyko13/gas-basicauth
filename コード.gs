// 1回目デプロイ
function doGet(e) {
  return ContentService.createTextOutput('このページは表示できません');
}
// 2回目デプロイ
// function doGet(e) {
//   htmlOutput = HtmlService.createTemplateFromFile('auth');
//   return htmlOutput.evaluate();
// }

function doPost(e) {
  const id = e.parameter.id;
  const pass = e.parameter.password;

  if (id == 'id' && pass == 'pass') {
    htmlOutput = HtmlService.createTemplateFromFile('index'); //test.htmlを返す
    return htmlOutput.evaluate();
  } else {
    return ContentService.createTextOutput('認証失敗');
  }
}
