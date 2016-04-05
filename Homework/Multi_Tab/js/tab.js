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

function hidebackground(element) {
    var parent = document.getElementById("thumbs");
    var thumbs = parent.children;
    for (i = 0; i < thumbs.length; i++) {
        if (thumbs[i] != element) {
            thumbs[i].style.opacity = "0.5";
        } else {
            thumbs[i].style.opacity = "1";
        }
    }
}

function showbackground(element) {
    var parent = document.getElementById("thumbs");
    var thumbs = parent.children;
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].style.opacity = "1";
    }
}
