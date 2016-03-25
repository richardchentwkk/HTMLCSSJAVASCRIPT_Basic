function changeContent(tabNum) {
    var contents =
        new Array(getId("content1"), getId("content2"), getId("content3"));
    var tabs =
        new Array(getId("tab1"), getId("tab2"), getId("tab3"));

    for (i = 0; i < contents.length; i++) {
        if (i === tabNum) {
            tabs[i].style.backgroundColor = "white";
            contents[i].style.display = "block";
        } else {
            tabs[i].style.backgroundColor = "gray";
            contents[i].style.display = "none";
        }
    }
}

function getId(id) {
    return document.getElementById(id);
}
