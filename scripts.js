const location = alert ("Please be aware we can only book clients in Georgia California states only!");
console.log(location);

var alphabetLinks = document.getElementById('alphabetLinks');

for (var i = 0; i < 26; i++) {
  var listItem = document.createElement('li');
  var link = document.createElement('a');
  link.textContent = String.fromCharCode(65 + i);
  link.href = '#' + String.fromCharCode(65 + i);
  listItem.appendChild(link);
  alphabetLinks.appendChild(listItem);
}