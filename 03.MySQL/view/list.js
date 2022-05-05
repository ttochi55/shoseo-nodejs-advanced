module.exports = {
  form: function (rows) {
    let tableRow = '';
    rows.map((row) => {
      tableRow += `<tr>
      <td>${row._id}</td>
      <td>${row.title}</td>
      <td>${row.lyrics}</td>
      <td><button type="button" name="update" value="${row._id}" onclick="location.href='/update/${row._id}'">수정</button></td>
      <td><button type="button" id="delete" value="${row._id}" onclick="location.href='/delete/${row._id}'">삭제</button></td>
    </tr>`;
    });
    return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Song List</title>
</head>
<body>
  <h1>Song List</h1>
  <a href="/">LIST</a>
  <a href="/insert">INSERT</a>
  <hr>
  <table>
    <tr>
      <th>ID</th>
      <th>제목</th>
      <th>가사</th>
      <th>편집</th>
    </tr>
    ${tableRow}
  </table>
  </body>
</html>`;
  },
};
