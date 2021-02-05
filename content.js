

function func() {
	var link = window.location.href.replace("youtube","youtubepp"); 
	var node = document.createElement("a");
	var textnode = document.createTextNode("DOWNLOAD");
	var att = document.createAttribute("class");       
	att.value = "odytmp4";
	node.href = link
	node.target = "_blank"
	node.setAttributeNode(att);
	node.appendChild(textnode);
	document.getElementById("owner-sub-count").appendChild(node);
};


window.onload = func;