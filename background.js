chrome.browserAction.onClicked.addListener(handler);

function handler(tab){
	// console.log(tab);
	let msg = {
		code: "CompileJS"
	};
	chrome.tabs.sendMessage(tab.id, msg)
}
