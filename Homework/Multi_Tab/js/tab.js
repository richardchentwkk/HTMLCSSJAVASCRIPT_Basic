function changeContent(tabNum) {
    var contents =
        new Array(getId("content1"), getId("content2"));
    var tabs =
        new Array(getId("tab1"), getId("tab2"));

    for (i = 0; i < contents.length; i++) {
        if (i === tabNum) {
            contents[i].style.display = "block";
        } else {
            contents[i].style.display = "none";
        }
    }
}

function getId(id) {
    return document.getElementById(id);
}
