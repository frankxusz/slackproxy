function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();

    if (shExpMatch(url,"*slack*")  ||
        shExpMatch(url,"*mitbbs*") ||
        shExpMatch(url,"*google*") ||
        shExpMatch(url,"*youtube*")) {
	        return "PROXY proxy.emea.ibm.com:8080; DIRECT";
		}
	
    return "DIRECT";
}