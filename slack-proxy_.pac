function FindProxyForURL(url, host)
{
    if (shExpMatch(url,"*slack*") ||
    if (shExpMatch(url,"*google*"))
      {
            return "PROXY proxy.p3.event.ibm.com:8080; DIRECT";
      }
    return "PROXY proxy.us.ibm.com:8080; DIRECT";
}
