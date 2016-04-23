function Scene(id) {

    this.id = id;

    this.getImageUrl = function() {
        return "scene" + this.id + ".png";
    }

    this.getMessage = function() {
        switch (this.id) {
            case 0:
                this.message = "歡迎開始遊戲，請選擇1或2";
                break;
            case 1:
                this.message = "1.走過小徑 2.走過小橋";
                break;
            case 2:
                this.message = "1.繞過小屋 2.跟女巫打招呼";
                break;
            case 3:
                this.message = "1.走過小橋 2.看看小溪";
                break;
            case 4:
                this.message = "1.悄悄的走過去 2.跟女巫打招呼";
                break;
            case 5:
                this.message = "被女巫吃掉遊戲結束";
                break;
            case 6:
                this.message = "被巨人吃掉遊戲結束";
                break;
            case 7:
                this.message = "1.跟巨人打聲招呼 2.快逃！";
                break;
            case 8:
                this.message = "遊戲結束";
                break;
        }

        return this.message;
    }

    this.setTargetIdOfScreneImage = function(targetId) {
        this.targetId = targetId;
    }

    this.changeSceneByDecision = function(decision) {

        switch (this.id) {
            case 0:
                this.id = 1;
                break;
            case 1:
                this.id = decision === 1 ? 2 : 3;
                break;
            case 2:
                this.id = decision === 1 ? 4 : 5;
                break;
            case 3:
                this.id = decision === 1 ? 6 : 7;
                break;
                //Game finished.
            case 4:
            case 5:
            case 6:
            case 7:
                this.id = 8;
                break;
        }

        $(this.targetId).attr("src", this.getImageUrl());
        $(".message").html(this.getMessage());
        console.log(this.id + " " + decision);
    }

}

//Game init.
var currentScene = new Scene(0);

currentScene.setTargetIdOfScreneImage("#sceneimg");
//$(".message").html(currentScene.getMessage());

$(document).ready(function() {
    $(".message").html(currentScene.getMessage());

    $("#decision1").click(function() {
        currentScene.changeSceneByDecision(1);
    });

    $("#decision2").click(function() {
        currentScene.changeSceneByDecision(2);
    });
});
