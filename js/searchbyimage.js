/**
 * @author Jonathan @lowriskFF
 * 
 */
function searchByImage(info, tab) {
	var url = "http://www.google.com/searchbyimage?image_url=" + info.srcUrl;
	chrome.tabs.create({"url":url});
}

chrome.contextMenus.create({"title":"Google Search by Image",
							"contexts":["image"], "onclick": searchByImage });
