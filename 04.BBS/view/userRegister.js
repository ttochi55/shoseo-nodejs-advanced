const template = require('./template');
module.exports.test = function () {
  return `
${template.header()}

<br><br><br><br>

<h3>회원 가입</h3>

<hr>

<div class="container">
  
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <form action="/user/register" method="post">
        <table class="table table-borderless">
          <tr>
            <td><label for="uid">사용자ID</label></td>
            <td><input type="text" name="uid" id="uid"></td>
          </tr>
          <tr>
            <td><label for="pwd">비밀번호</label></td>
            <td><input type="password" name="pwd" id="pwd"></td>
          </tr>
          <tr>
            <td><label for="pwd2">비밀번호 확인</label></td>
            <td><input type="password" name="pwd2" id="pwd2"></td>
          </tr>
          <tr>
            <td><label for="uname">이름</label></td>
            <td><input type="text" name="uname" id="uname"></td>
          </tr>
          <tr>
            <td colspan="2" style="text-align: center;">
              <input class="btn btn-primary" type="submit" value="가입">
              <input class="btn btn-secondary" type="reset" value="취소">
            </td>
          </tr>
        </table>
      </form>
    </div>
    <div class="col-3"></div>
  </div>

</div>

${template.footer()}
`;
};
