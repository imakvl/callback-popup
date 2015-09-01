//window.onkeyup = okno;
document.getElementById('popup').onclick = okno;
document.getElementById('callbackheader').onclick = callbackheaderclick;
document.getElementById('yesb').onclick = yesbut;
document.getElementById('nob').onclick = nobut;
document.getElementById('alarm').onclick = alarmlink;
document.getElementById('okbutton').onclick = oklink;
document.getElementById('wait').onclick = waitlink;
document.getElementById('okclose').onclick = okcloselink;

function okno(e) {
	if (e.target.nodeName != 'DIV' && e.target.nodeName != 'INPUT' && e.target.nodeName != 'FIGCAPTION' && e.target.nodeName != 'A' || e.keyCode == 27) {
		document.getElementById('popup').style.display = 'none';
		localStorage['timer_count'] = -1;
	}
}

function nobut(e) {
	document.getElementById('popup').style.display = 'none';
	localStorage['timer_count'] = -1;
}

function okcloselink(e) {
	document.getElementById('popup').style.display = 'none';
	localStorage['timer_count'] = -1;
}

function yesbut(e) {
	document.getElementById('firstpage').style.display = 'none';
	document.getElementById('secondpage').style.display = 'block';
}

function alarmlink(e) {
	document.getElementById('alarmdiv').style.display = 'block';
}

function callbackheaderclick(e) {
	document.getElementById('popup').style.visibility = 'visible';
	document.getElementById('popup').style.display = 'table';
	document.getElementById('firstpage').style.display = 'none';
	document.getElementById('secondpage').style.display = 'block';
	document.getElementById('fcaption').style.display = 'block';
	document.getElementById('thirdpage').style.display = 'none';
	localStorage['timer_count'] = -1;
}

function oklink(e) {
	document.getElementById('alarmdiv').style.display = 'none';
}

function waitlink(e) {
	document.getElementById('secondpage').style.display = 'none';
	document.getElementById('fcaption').style.display = 'none';
	document.getElementById('frame0').src = "/sites/all/themes/antasport/callback.php?name=" + document.getElementById("callbackname").value + "&phone=" + document.getElementById("callbackphone").value + "&from=" + document.getElementById("callbackfrom").value + "&till=" + document.getElementById("callbacktill").value;
	document.getElementById('thirdpage').style.display = 'block';
}

function timer_tck() {
	if (localStorage['timer_count'] >= 1) {
		localStorage['timer_count'] = parseInt(localStorage['timer_count']) + 1;
	} else {
		if (localStorage['timer_count'] != -1)
			localStorage['timer_count'] = 1;
	}
	if (localStorage['timer_count'] > 30) {
		document.getElementById('popup').style.visibility = 'visible';
	} else {
		setTimeout(timer_tck, 1000);
	}

}

setTimeout(timer_tck, 1000);