var node = document.createElement("a");
var textnode = document.createTextNode("DOWNLOAD");
var att = document.createAttribute("class");   


function func() {   
	att.value = "odytmp4";
	node.href = "https://www.youtube.com/channel/UCpryVRk_VDudG8SHXgWcG0w"
	node.target = "_blank"
	node.setAttributeNode(att);
	node.appendChild(textnode);
	// document.querySelectorAll('#owner-sub-count')[2].appendChild(node);
	// document.querySelectorAll('#subscribe-button')[2].appendChild(node);
	document.querySelectorAll("#top-row > ytd-video-owner-renderer")[0].appendChild(node);
};

function genLink() {
	node.href = window.location.href.replace("youtube","youtubezz"); 
};



setInterval(genLink, 500);
window.onload = setTimeout(func, 3000);
