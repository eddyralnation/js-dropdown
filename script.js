let menuList = document.getElementById('menuList');

menuList.style.maxHeight="0px";
menuList.style.opacity="0%";

function togglemenu()
{
	if(menuList.style.maxHeight=="0px")
	{
		menuList.style.maxHeight="180px";
		menuList.style.opacity="100%";

	}
	else
	{
		menuList.style.maxHeight="0px";
		menuList.style.opacity="0%";
	}
}
