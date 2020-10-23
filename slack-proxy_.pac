function FindProxyForURL(url, host)
{
    if (shExpMatch(url,"*slack*") ||
        shExpMatch(url,"*.ibm.com") ||
        shExpMatch(url,"*github*")) {
	        return "PROXY proxy.p3.event.ibm.com:8080; DIRECT";
		}
    return "PROXY proxy.us.ibm.com:8080; DIRECT";
}
