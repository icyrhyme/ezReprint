function process(idx, xhr) {
  return function(){
    if (xhr.readyState==4 && xhr.status==200)
    {
      document.images[idx].src = JSON.parse(xhr.responseText).upload.links.original;
    }
  };
}
for(var i = 0; i < document.images.length; ++i) {
  src = document.images[i].src;
  var fd = new FormData();
  fd.append("image", src); // Append the file
  fd.append("type", "url");
  fd.append("key", "77c69b52f7992b9996a2cf963eee4651"); 
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=process(i, xhr);
  xhr.open("POST", "http://api.imgur.com/2/upload.json", true);
  xhr.send(fd);  
}
alert("done!");

