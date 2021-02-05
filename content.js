var node = document.createElement("a");

function func() {
	var textnode = document.createTextNode("DOWNLOAD");
	var att = document.createAttribute("class");       
	att.value = "odytmp4";
	node.href = "https://www.youtube.com/channel/UCpryVRk_VDudG8SHXgWcG0w"
	node.target = "_blank"
	node.setAttributeNode(att);
	node.appendChild(textnode);
	document.getElementById("owner-sub-count").appendChild(node);
};

function genLink() {
	node.href = window.location.href.replace("youtube","youtubepp"); 
	console.log(node.href)
};

setInterval(genLink, 500);
window.onload = func;
