function f()
{
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++)
	{
		var c = divs[i];
		rpl(c, "e1f617", ":*");
		rpl(c, "e1f632", ":O");
		rpl(c, "e1f600", ":D");
		rpl(c, "e1f61b", ":P");
		rpl(c, "e1f610", ":|");
		rpl(c, "e1f61e", ":(");
		rpl(c, "e1f603", ":)");
		rpl(c, "e1f49c", "<3");
		rpl(c, "e1f626", "D:");
	}
}
function rpl(c, cl, txt)
{
	if (c.className.indexOf(cl) != -1)
	{
		c.className = "";
		c.innerHTML = txt;
	}
}
f();
function nodeInsertedCallback(event)
{
	f();
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
