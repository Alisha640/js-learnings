// See notes

// Imp points:
// 1)children =>direct nd nested both 
// 2)child nodes =>only direct
// 3)descendent nodes =>every single one ex: every single tag within html tag is instanceof;s descendent

// 4)document.body.firstChild =>access the first child of body (NOTE: if there's a space before first child then it will access it as "text"(text node))
// 5)document.body.lastChild =>access last one
// 6)document.body.childNodes =>access all childs (NOTEl: it returns them in the form of nodelist/collection that looks exactly like an array but actually it's NOT ARRAY)
// 7)u can convert it into array like;
// let arr= Array.from(document.body.childNodes)
// console.log(arr) it has become an actual array now
// 8)Element.hasChildNodes() is a method to check if a particular el has any child. it returns boolean Val