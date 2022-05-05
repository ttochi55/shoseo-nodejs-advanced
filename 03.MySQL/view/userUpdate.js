module.exports.form = function (results) {
  const result = results[0];
  const { uid: uid, pwd } = result;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>사용자 관리</title>
</head>
<body>
  <h1>사용자 정보 수정</h1>
  <hr>
  <form action="/update" method="post">
    <input type="hidden" name="uid" value="${uid}" />
    <table>
      <tr>
        <td><label for="pwd">비밀번호</label></td>
        <td><input type="password" id="pwd" name="pwd" /></td>
      </tr>
      <tr>
        <td><label for="pwd2">비밀번호 확인</label></td>
        <td><input type="password" id="pwd2" name="pwd2" /></td>
      </tr>
      <tr>
        <td colspan="2">
          <button type="submit">업데이트</button>
        </td>
      </tr>
    </table>
  </form>
</body>
</html>`;
};
