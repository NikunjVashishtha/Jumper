// Begin
$(document).click(
    function() {
        startGame();
    }
);
$(document).keypress(
    function() {
        startGame();
    }
);
function startGame() {
    $("#character").attr("src", "char.gif");
    setInterval(moveX,0.8);
    setInterval(moveStone,0.8);
    $(document).off("click");
    $(document).off("keypress");
}


//------------------------------------------Controls----------------------------------------------

$(document).keydown(
    function (e) {
        if (e.keyCode == 32 && falling == false)
        {
            jumpTimer = setInterval(jump,0.01);
        }
    }
);

//--------------------------------------Character Behavior----------------------------------------

var falling = false;
var jumping = true;
var jumpTimer;
var fallTimer;

function fall() {
    if (parseInt($("#character").css("marginBottom"),10) <= "0")
    {
        clearInterval(fallTimer);
        falling = false;
    }
    else {
        $("#character").css({ marginBottom: "-=1px" });
        falling = true;
    }
}

function jump() {
    if (parseInt($("#character").css("marginBottom"),10) >= "140")
    {
        fallTimer = setInterval(fall,0.01);
        clearInterval(jumpTimer);
        jumping = false;
    }
    else {
        $("#character").css({ marginBottom: "+=1px" });
        jumping = true;
    }
}


//--------------------------------------Canvas---------------------------------------------

var SkyPosX = 0;
var GrassPosX  = 0;
TreePosX = Math.floor(Math.random() * (1200 - 1000 + 1)) + 1400;
var StoneX1 = Math.floor(Math.random() * (1200 - 1000 + 1)) + 1400;
var StoneX2 = Math.floor(Math.random() * (1600 - 1300 + 1)) + 1300;
var StoneX3 = Math.floor(Math.random() * (1800 - 1600 + 1)) + 1600;
var StoneX4 = Math.floor(Math.random() * (2000 - 1800 + 1)) + 1800;

function renderTree()
{
    if (TreePosX <= 0)
    {
        var img = document.createElement("img");
        Count = (Math.ceil(Math.random()*2) - 1);
        url = TreeImg[Count];
        img.src = url;
        img.className = "tree";
        TreePosX = Math.floor(Math.random() * (1200 - 1000 + 1)) + 1400;
        $("#grassArea").before(img);
    }
    else {
        $(".tree").remove()
    }
    
}
function moveX()
{
    renderTree();
    SkyPosX -= 1;
    GrassPosX  -= 1;
    TreePosX -= 1;
    $("#sky").css("backgroundPositionX",SkyPosX+"px");
    $("#grassArea").css("backgroundPositionX",GrassPosX +"px");
    $(".tree").css("marginLeft",TreePosX +"px");
    if (SkyPosX == -1000)
    {
        SkyPosX = 0;
    }
    if (GrassPosX  == -1300)
    {
        GrassPosX  = 0;
    }
    if (TreePosX  == -1300)
    {
        TreePosX  = 0;
    }
}

// ---------------------------------------Objects & Obsctacles-----------------------------------------
var StoneCount;
const StoneImg = ["stone1.png","stone2.png","stone3.png","stone4.png"];
const TreeImg = ["tree.png","tree2.png"];
StoneCount = (Math.ceil(Math.random()*4) - 1);
var url = StoneImg[StoneCount];
var grass = document.getElementById("grassArea");

function renderStone(num) {
    if (num == 1)
    {
        var img1 = document.createElement("img");
        img1.src = url;
        img1.className = "stone";
        img1.id = "stone1";
        $("#grassArea").before(img1);
    }
    
    else if (num == 2)
    {
        var img2 = document.createElement("img");
        StoneCount = (Math.ceil(Math.random()*4) - 1);
        url = StoneImg[StoneCount];
        img2.src = url;
        img2.className = "stone";
        img2.id = "stone2";
        $("#grassArea").before(img2);
    }
    else if (num == 3)
    {
        var img3 = document.createElement("img");
        StoneCount = (Math.ceil(Math.random()*4) - 1);
        url = StoneImg[StoneCount];
        img3.src = url;
        img3.className = "stone";
        img3.id = "stone3";
        $("#grassArea").before(img3);
    }
    else if (num == 4)
    {
        var img4 = document.createElement("img");
        StoneCount = (Math.ceil(Math.random()*4) - 1);
        url = StoneImg[StoneCount];
        img4.src = url;
        img4.className = "stone";
        img4.id = "stone4";
        $("#grassArea").before(img4);
    }
}

function moveStone() {
    StoneX1 -= 1;
    StoneX2 -= 1;
    StoneX3 -= 1;
    StoneX4 -= 1;
    $("#stone1").css("marginLeft",StoneX1+"px");
    $("#stone2").css("marginLeft",StoneX2+"px");
    $("#stone3").css("marginLeft",StoneX3+"px");
    $("#stone4").css("marginLeft",StoneX4+"px");
    if (StoneX1 < -100)
    {
        $("#stone1").remove();
        renderStone(1);
    }
    else if (StoneX2 < - 100)
    {
        $("#stone2").remove();
        renderStone(2);
    }
    else if (StoneX3 < - 100)
    {
        $("#stone3").remove();
        renderStone(3);
    }
    else if (StoneX4 < - 100)
    {
        $("#stone4").remove();
        renderStone(4);
    }
}