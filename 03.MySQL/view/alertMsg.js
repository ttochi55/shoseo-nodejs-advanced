module.exports.alertMsg = function (message, url) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
  <script>
    alert('${message}');
    window.location.href="${url}";
  </script>
</body>
</html>`;
};
