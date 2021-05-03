canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_objects = "";
var block_image_objects = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_objects = Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,left:player_x
        });
        canvas.add(player_objects);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_image_objects = Img;
        block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(block_image_height);
        block_image_objects.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_objects);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed == "38"){
        up();
        console.log("up arrow is pressed");
    }
    if(keyPressed == "40"){
        down();
        console.log("down arrow is pressed");
    }
    if(keyPressed == "37"){
        left();
        console.log("left arrow is pressed");
    }
    if(keyPressed == "39"){
        right();
        console.log("right arrow is pressed");
    }
    if(keyPressed == "70"){
        new_image("ironman_face.png");
        console.log("f is pressed");
    }
    if(keyPressed === "66"){
        new_image("spiderman_body.png");
        console.log("g is pressed");
    }
    if(keyPressed == "76"){
        new_image("hulk_legs.png");
        console.log("L is pressed");
    }
    if(keyPressed == "82"){
        new_image("thor_right_hand.png");
        console.log("r is pressed");
    }
    if(keyPressed == "72"){
        new_image("captain_america_left_hand.png");
        console.log("h is pressed");
    }