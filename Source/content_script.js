walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	if (node.tagName && (
	      node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea' || 
	      node.tagName.toLowerCase() == 'script' || node.tagName.toLowerCase() == 'style'
	   ) || (node.classList && (
	      node.classList.contains('ace_editor') || node.classList.contains('CodeMirror')))
	   )
	{
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bPokemon\b/gi, "Pokémon");

	textNode.nodeValue = v;
}


