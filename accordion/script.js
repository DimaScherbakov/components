function Accordion(options)
{
	var elem;
	// var opts = options;

	function getElem()
	{
		if(elem != undefined)
			{
				return elem;
			}
		else
			{
				render()
				return elem;
			}
	}

	function render()
	{
		elem = document.createElement("div");
		elem.className = "accordion";
		
		var ul = document.createElement('ul');
		ul.className = "titles";
		elem.appendChild(ul);
		options.chars.map(function(item)
		{
			var li = document.createElement('li');
			li.textContent = item.name;
			// console.log(li);
			ul.appendChild(li);
		})
		var p = document.createElement("p");
		p.className = "description";
		elem.appendChild(p);

		elem.onmousedown = function(){return false;};

		elem.onclick = function(event)
		{
			if(event.target.closest('li'))
			{
			var index = $("ul.titles li").index(event.target.closest('li')); 	
				showDescription(index);
			}
		} 
		
		function showDescription(index)
		{
			console.info(options.chars[index].title);
			p.textContent = options.chars[index].title;
			
		}
	}
	this.getElem = getElem;
}