// Session storage is similar to local storage as it uses same properties nd methods that we studied for local storage
// the only diff is that, session storage retaines only in one tab, if u open the same pg in new tab it will be vanished. it also retaines refreshing the pg
// methods r same; SVGTextPositioningElement, getitem, clear, removeitem etc

// STORAGE EVENT=> when the data is updated in local or session storage the onstorage event is triggered
// open same pg in diff toolbar. set somr item in local/session storage then update it, when u will update it on pg the pg will alert u to notify
window.onstorage = (e) => {
  alert("updated");
  console.log(e);
};
