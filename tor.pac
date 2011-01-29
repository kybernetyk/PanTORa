function FindProxyForURL(url, host)
{
	if (shExpMatch(host, "www.pandora.com")) return "SOCKS 127.0.0.1:9050";
	return "DIRECT";
}
