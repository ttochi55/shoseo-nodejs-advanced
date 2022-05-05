const template = require('./template');
module.exports.test = function () {
  return `
${template.header()}
  <div class="container" style="margin-top: 90px;">
  이곳에 여러분의 컨텐츠를 채워 넣으면 됩니다.
  </div>
${template.footer()}
`;
};
