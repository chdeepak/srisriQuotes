function onAnchorClick(event) {
  chrome.tabs.create({ url: event.srcElement.href });
  return false;
}

// Given an array of URLs, build a DOM list of these URLs in the
// browser action popup.
function buildPopupDom(mostVisitedURLs) {
  // var popupDiv = document.getElementById('topSitesMenu');
  // var ol = popupDiv.appendChild(document.createElement('ol'));
  var urlNumb = "";

  if(mostVisitedURLs.length < 10)
    urlNumb = mostVisitedURLs.length;
  else
    urlNumb = 10;

  for (var i = 0; i < urlNumb; i++) {
    // var li = ol.appendChild(document.createElement('li'));
    // var a = li.appendChild(document.createElement('a'));
    var link = mostVisitedURLs[i].url;
    var title = mostVisitedURLs[i].title;
    if(title.length >35){
      title= title.substring(0,32);
      title.concat('...');
    }
    // $(a).append('<img src="https://plus.google.com/_/favicon?domain_url='+a.href+'">');
    $('#sidebar ol').append('<a href="'+link+'">'+'<li><div style="color:black"><img src="https://plus.google.com/_/favicon?domain_url='+link+'">      '+title+'</div></li></a>');
    // a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
    // a.addEventListener('click', onAnchorClick);
  }
}

chrome.topSites.get(buildPopupDom);
