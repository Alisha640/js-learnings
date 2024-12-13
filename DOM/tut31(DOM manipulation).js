// DOM MANIPULATION/WALKING THROUGH DOM
// see the notes

// imp points:
// 1)can access any html el nd change it on our computer NOT AT SERVER SIDE 
// 2)most imp nodes r ELEMENT Node, TEXT Node, COMMENT Node
// 3)html is root => head nd body r it's children 
// 4)text is leaf to tree (nothing can be added to it)
// 5)document.documentElement => returns html tag (everything in it too), document.body => returns body tag, document.head => returns head tag 
// 6)document.title => will not return title tag instead returns the string (title)(can be verified by using typeof operator)
// 7)typeof document.documentElement => OBJECT 
// 8)if we write js before body nd access it document.body will return NULL as the page is parsed half yet 

