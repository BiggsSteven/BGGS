$(document).ready(function(){
  $("#search").click(function(){
    
	var url = "https://www.boardgamegeek.com/xmlapi/boardgame/155987";
	
	var xhr = new XMLHttpRequest();
    xhr.addEventListener('load',reqListener);
	xhr.open('get',url, true);
	xhr.onload = function(e) {
	  $('#placeholder').text(this.response);
	};
	xhr.send();
  });

  function reqListener () {
    console.log(this.responseText);
  }
});



/* Controller.prototype._createObjectURL = function(blob) {
  var objURL = URL.createObjectURL(blob);
  this.objectURLs = this.objectURLs || [];
  this.objectURLs.push(objURL);
  return objURL;
};

Controller.prototype._clearObjectURL = function() {
  if (this.objectURLs) {
    this.objectURLs.forEach(function(objURL) {
      URL.revokeObjectURL(objURL);
    });
    this.objectURLs = null;
  }
};

Controller.prototype._requestRemoteImageAndAppend = function(imageUrl, element) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', imageUrl);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var img = document.createElement('img');
    img.setAttribute('data-src', imageUrl);
    img.className = 'icon';
    var objURL = this._createObjectURL(xhr.response);
    img.setAttribute('src', objURL);
    element.appendChild(img);
  }.bind(this);
  xhr.send();
};

Controller.prototype._parseForImageURLs = function () {
  // remove old blobs to avoid memory leak:
  this._clearObjectURL();
  var links = this.$todoList.querySelectorAll('a[data-src]:not(.thumbnail)');
  var re = /\.(XML)$/;
  for (var i = 0; i<links.length; i++) {
    var url = links[i].getAttribute('data-src');
    if (re.test(url)) {
      links[i].classList.add('thumbnail');
      this._requestRemoteImageAndAppend(url, links[i]);
    }
  }
}; */