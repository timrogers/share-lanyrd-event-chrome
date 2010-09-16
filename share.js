	var event_title = document.title.split(" | ");
	var event_title = decodeURIComponent(event_title[0]);
	var facebook_image = chrome.extension.getURL("facebook.png");
	var twitter_image = chrome.extension.getURL("twitter.png");
	
	var facebook = "<p><a href=\"http://www.facebook.com/sharer.php?u=" + window.location + "&t=" + encodeURIComponent(event_title) + "\" class=\"fb-share icon url icon-minus\"><img src=\"" + facebook_image + "\" alt=\"Share on Facebook\"><span>Share on Facebook</span></a></p>";
	var tweet = "Event: " + decodeURIComponent(event_title) + " " + decodeURIComponent(window.location);
	var twitter = "<p><a href=\"http://twitter.com/home?status=" + encodeURIComponent(tweet) + "\" class=\"icon url icon-minus\"><img src=\"" + twitter_image + "\" alt=\"Share on Twitter\"><span>Share on Twitter</span></a></p>";
	var append = facebook + twitter;
	$("div.item-meta:first").append(append);

	$("a.fb-share").click(function(e) {
		e.preventDefault();
		window.open("http://www.facebook.com/sharer.php?u=" + window.location + "&t=" + encodeURIComponent(event_title), "facebookshare", "width=626,height=340");
	});