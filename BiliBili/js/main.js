window.onload=function(){
	var banner=document.getElementById("bili_banner");
	document.getElementById("bili_header_link").onmouseover=function(){
		banner.style.visibility="visible";
		banner.style.opacity=1;
	}
	document.getElementById("bili_header_link").onmouseout=function(){
		banner.style.visibility="hidden";
		banner.style.opacity=0;
	}
}