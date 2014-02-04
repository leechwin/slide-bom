$('#window_closed').html('State: ' + window.closed);
$('#window_defaultStatus').html('State: ' + window.defaultStatus);
$('#window_name').html('State: ' + window.name);
$('#window_frames').html('Frame length: ' + window.frames.length);

$('#window_opener').html('State: ' + window.opener);
$('#window_top').html('State: ' + window.top);
$('#window_topequal').html('window === top: ' + (window === top));
$('#window_parent').html('State: ' + window.parent);
$('#window_status').html('State: ' + window.status);

$('#window_innerHeight').html('State: ' + window.innerHeight);
$('#window_innerWidth').html('State: ' + window.innerWidth);
$('#window_outerHeight').html('State: ' + window.outerHeight);
$('#window_outerWidth').html('State: ' + window.outerWidth);

$('#window_coordinate').html('screenLeft: ' + window.screenLeft + ' screenTop: ' + window.screenTop + ' screenX: ' + window.screenX + ' screenY: ' + window.screenY);
$('#window_pageXOffset').html('State: ' + window.pageXOffset);
$('#window_pageYOffset').html('State: ' + window.pageYOffset);

function window_encode_decode() {
    var str = 'Hellow IDE?';
    var enc = window.btoa(str);
    var dec = window.atob(enc);
    var res = 'Encoded String: ' + enc + '\n' + 'Decoded String: ' + dec;
    alert(res);
}

var myWindow = null;
function isWindowEnable() {
    if ( myWindow == null || myWindow.closed == true ) {
        return false;
    } else {
        return true;
    }
}

function window_open() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=200,height=100");
    }
}
function window_close() {
    if ( isWindowEnable()  ) {
        myWindow.close();
        myWindow = null;
    }
}
function window_focus() {
    if ( isWindowEnable() ) {
        myWindow.focus();
    }
}
function window_blur() {
    if ( isWindowEnable() ) {
        myWindow.blur();
    }
}

function window_moveBy() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=200,height=100");
    }
    if ( isWindowEnable() ) {
        myWindow.moveBy(250,250);
        myWindow.focus();
    }
}
function window_moveTo() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=200,height=100");
    }
    if ( isWindowEnable() ) {
        myWindow.moveTo(0,0);
        myWindow.focus();
    }
}
function window_resizeBy() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=200,height=100");
    }
    if ( isWindowEnable() ) {
        myWindow.resizeBy(250,250);
        myWindow.focus();
    }
}
function window_resizeTo() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=200,height=100");
    }
    if ( isWindowEnable() ) {
        myWindow.resizeTo(250,250);
        myWindow.focus();
    }
}

function window_scrollBy() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=400,height=300");
        myWindow.document.write("<p>Click the button to scroll the document window by 100px horizontally.</p><br><br><div style='border:1px solid black;background-color:lightblue;height:75px;width:5000px;'></div>");
    } else {
    	myWindow.scrollBy(500,0);
    }
}
function window_scrollTo() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=400,height=300");
        myWindow.document.write("<p>Click the button to scroll the document window by 100px horizontally.</p><br><br><div style='border:1px solid black;background-color:lightblue;height:75px;width:5000px;'></div>");
    } else {
    	myWindow.scrollTo(500,0);
    }
}

var timeoutID = null;
function window_setTimeout() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=400,height=300");
        myWindow.document.write("<div id='box' style='border:1px solid black;background-color:red;height:75px;width:75px;'></div>");
    }
    timeoutID = setTimeout(function() {
    	var color = myWindow.document.getElementById('box').style.backgroundColor;
        if ( color == 'red') {
            myWindow.document.getElementById('box').style.backgroundColor = 'blue';
        } else {
            myWindow.document.getElementById('box').style.backgroundColor = 'red';
        }
    }, 2000);

}
function window_clearTimeout() {
    clearTimeout(timeoutID);

}

var intervalID= null;
function window_setInterval() {
	if ( isWindowEnable() ) {
		clearInterval(intervalID);
		myWindow.close();
		myWindow = null;
	}
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=400,height=300");
        myWindow.document.write("<div id='box' style='border:1px solid black;background-color:red;height:75px;width:75px;'></div>");
    }
    intervalID = setInterval(function() {
    	var color = myWindow.document.getElementById('box').style.backgroundColor;
        if ( color == 'red') {
            myWindow.document.getElementById('box').style.backgroundColor = 'blue';
        } else {
            myWindow.document.getElementById('box').style.backgroundColor = 'red';
        }
    }, 1000);

}
function window_clearInterval() {
    clearInterval(intervalID);

}


$('#screen_availHeight').html('State: ' + screen.availHeight);
$('#screen_availWidth').html('State: ' + screen.availWidth);
$('#screen_height').html('State: ' + screen.height);
$('#screen_width').html('State: ' + screen.width);
$('#screen_colorDepth').html('State: ' + screen.colorDepth);
$('#screen_pixelDepth').html('State: ' + screen.pixelDepth);


$('#location_hash').html('State: ' + location.hash);
$('#location_host').html('State: ' + location.host);
$('#location_hostname').html('State: ' + location.hostname);
$('#location_href').html('State: ' + location.href);
$('#location_pathname').html('State: ' + location.pathname);
$('#location_port').html('State: ' + location.port);
$('#location_protocol').html('State: ' + location.protocol);
$('#location_search').html('State: ' + location.search);
function location_assign() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=400,height=300");
        myWindow.location.assign("www.daum.net");
    } else {
        myWindow.location.assign("http://leechwin.tistory.com");
    }
}
function location_reload() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=400,height=300");
        myWindow.location.assign("http://leechwin.github.io");
    } else {
        myWindow.location.reload();
    }
}
function location_replace() {
    if ( !isWindowEnable() ) {
        myWindow = window.open("","","width=400,height=300");
        myWindow.location.assign("http://leechwin.github.io");
    } else {
        myWindow.location.replace("http://www.tizenschools.com");
    }
}


$('#navigator_appCodeName').html('State: ' + navigator.appCodeName);
$('#navigator_appName').html('State: ' + navigator.appName);
$('#navigator_appVersion').html('State: ' + navigator.appVersion);
$('#navigator_cookieEnabled').html('State: ' + navigator.cookieEnabled);
$('#navigator_language').html('State: ' + navigator.language);
$('#navigator_onLine').html('State: ' + navigator.onLine);
$('#navigator_platform').html('State: ' + navigator.platform);
$('#navigator_product').html('State: ' + navigator.product);
$('#navigator_userAgent').html('State: ' + navigator.userAgent);
$('#navigator_javaEnabled').html('State: ' + navigator.javaEnabled());


var flag = false;
$('#history_length').html('State: ' + history.length);
function history_go() {
    if ( flag == false ) {
        window.parent.myFrame.location.assign("http://www.daum.net");
        flag = true;
    }
    window.parent.myFrame.window.history.go(-1);
}
function history_back() {
    window.parent.myFrame.window.history.back();
}
function history_forward() {
    if ( isWindowEnable() ) {
        window.parent.myFrame.window.history.forward();
    }
}