var map = [
	"e1f617", ":*",
	"e1f632", ":O",
	"e1f600", ":D",
	"e1f61b", ":P",
	"e1f61c", ";p",
	"e1f610", ":|",
	"e1f61e", ":(",
	"e1f603", ":)",
	"e263a", ":)",
	"e1f49c", "<3",
	"e1f626", "D:",
	"e1f609", ";)",
	"e1f615", ":/",
	"e1f62e", ":o",
]
function replaceEmotes()
{
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++)
	{
		var divObj = divs[i];
		for (var j = 0; j < map.length; j += 2)
		{
			if (divObj.className.indexOf(map[j]) != -1)
			{
				divObj.className = "";
				divObj.innerHTML = map[j + 1];
				break;
			}
		}
	}
}
replaceEmotes();
document.addEventListener('DOMNodeInserted', replaceEmotes);
