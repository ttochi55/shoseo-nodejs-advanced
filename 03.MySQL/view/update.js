module.exports.form = function (results) {
  const result = results[0];
  const { _id: uid, title, lyrics } = result;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Song Form</title>
</head>
<body>
  <h1>Song Form</h1>
  <a href="/">LIST</a>
  <a href="/insert">INSERT</a>
  <a href="/update">UPDATE</a>
  <hr>
  <form action="/update/:${uid}" method="post">
    <input type="hidden" name="uid" value="${uid}" />
    <table>
      <tr>
        <td><label for="title">노래 제목</label></td>
        <td><input type="text" id="title" name="title" value="${title}" /></td>
      </tr>
      <tr>
        <td><label for="lyrics">가사</label></td>
        <td><input type="text" id="lyrics" name="lyrics" value="${lyrics}" /></td>
      </tr>
    </table>
    <input type="submit" value="업데이트"></td>
  </form>
</body>
</html>`;
};
