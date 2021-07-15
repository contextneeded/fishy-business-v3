namespace SpriteKind {
    export const Detector = SpriteKind.create()
}
function createDetectors () {
    detectorTileList = scene.getTilesByType(15)
    for (let value of detectorTileList) {
        TheDetector = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Detector)
        scene.place(value, TheDetector)
    }
}
function PeteLooking () {
    resetTimer()
    pause(4000)
    Pete.setImage(img`
        ......eeeee.....
        ......dddee.....
        ......dddde.....
        .....deddde.....
        .....dddddd.....
        .....eddddd.....
        ......ddddd.....
        .......ddd......
        ......77777.....
        .....7888887....
        .....7777777....
        .....7aaaaa7....
        .....d77777d....
        ......aaaaa.....
        ...eefeeeefeee..
        ...eeefeefeeee..
        ...eeeeeeeeeee..
        ...eeefeefeeee..
        ...eeeeeeeeeee..
        ...eeeffffeeee..
        ...eefeeeefeee..
        `)
    pause(100)
    if (!(Fish.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) && count == 0) {
        caughtTrue = true
        game.over(false)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Fish.isHittingTile(CollisionDirection.Bottom)) {
        Fish.vy = -169
        flipVertical()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorizontal()
})
function setupPete () {
    peteList = scene.getTilesByType(13)
    for (let value of peteList) {
        Pete = sprites.create(img`
            .....eeeee......
            .....eeddd......
            .....edddd......
            .....eddded.....
            .....dddddd.....
            .....ddddde.....
            .....ddddd......
            ......ddd.......
            .....77777......
            ....7888887.....
            ....7777777.....
            ....7aaaaa7.....
            ....d77777d.....
            .....aaaaa......
            ..eeeeeeeeeee...
            ..eeeeeeeeeee...
            ..eeeeeeeeeee...
            ..eeeeeeeeeee...
            ..eeeeeeeeeee...
            ..eeeeeeeeeee...
            ..eeeeeeeeeee...
            `, SpriteKind.Enemy)
        scene.place(value, Pete)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorizontal()
})
function flipVertical () {
    Fish.image.flipY()
}
function flipHorizontal () {
    Fish.image.flipX()
}
function createFrenchFries () {
    pizzaList = scene.getTilesByType(5)
    for (let value of pizzaList) {
        Pizza = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value, Pizza)
        animation.runMovementAnimation(
        Pizza,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
function setupMap () {
    scene.setBackgroundColor(9)
    scene.setTileMap(img`
        e e . . 5 . . 5 . . 5 f . . . . 
        . . . . . . . . . . 3 f . . . . 
        1 1 1 1 1 1 8 8 8 1 1 1 1 . . . 
        5 f f f 5 1 1 1 1 1 5 f 5 . . . 
        . . . . . . f 3 . . 3 f . . . d 
        . . . 1 1 1 1 1 1 1 8 8 1 1 1 1 
        . . d . . f 5 3 5 1 1 1 1 . . . 
        8 8 1 1 . . f 3 . 3 f f 5 f f f 
        1 1 . 1 1 1 f 3 . 3 f . . . . . 
        . 5 . 5 . 1 1 1 1 1 1 8 8 8 1 . 
        . . . . . f 5 3 . 3 5 1 1 1 . . 
        . d . . . f 3 . . 3 f . . . . d 
        . 1 8 8 1 1 1 1 8 8 1 1 1 1 1 1 
        . . 1 1 1 5 . . 1 1 1 f 3 . 5 . 
        8 8 . . . . . d . . . f 3 . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    scene.setTile(8, assets.tile`myTile2`, false)
    scene.setTile(1, assets.tile`myTile`, true)
    scene.setTile(14, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(15, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(13, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(3, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Detector, function (sprite, otherSprite) {
    PeteLooking()
    hideTextSprite = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (info.score() == 15) {
        game.over(true)
    }
})
function setupFish () {
    Fish = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .............eeeee..............
        ............e66666eee...........
        ..........e.e6666666ee..........
        ........eeeeeeeee6666eee........
        ......ee666666666eee6666e.......
        .....e66666666666666ee66e.......
        ....e666e6666666666666ee..eeee..
        ...e6e66e6666666ee66666eeee66e..
        .ee666666e6666ee6ee6666ee66666e.
        .e6666666e666e6666e66666666666e.
        .e6666666e6ee66666e66666666666e.
        ..e666666e66e66eeee6666ee66666e.
        ..eee666e666eee66666666e.ee666e.
        .....ee66666e666666666ee..eeee..
        ......eeeee666666666ee..........
        ..........eeeeeeeeee............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Player)
    Fish.setImage(scaling.scaleHalfX(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .............eeeee..............
        ............e66666eee...........
        ..........e.e6666666ee..........
        ........eeeeeeeee6666eee........
        ......ee666666666eee6666e.......
        .....e66666666666666ee66e.......
        ....e66666666666666666ee..eeee..
        ...e66ee666666666ee6666eeee66e..
        .ee666ee6666666ee6ee666ee66666e.
        .e6666666e6666e6666e6666666666e.
        .e66666666e6ee66666e6666666666e.
        ..e6666666e66e66eeee666ee66666e.
        ..eee6666e666eee6666666e.ee666e.
        .....ee666666e66666666ee..eeee..
        ......eeeee666666666ee..........
        ..........eeeeeeeeee............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `))
    Fish.setStayInScreen(true)
    controller.moveSprite(Fish, 50, 0)
    Fish.ay = 290
    scene.cameraFollowSprite(Fish)
    scene.placeOnRandomTile(Fish, 14)
    Fish.z = 8
}
function resetTimer () {
    count = 4
}
let Pizza: Sprite = null
let pizzaList: tiles.Tile[] = []
let peteList: tiles.Tile[] = []
let caughtTrue = false
let Fish: Sprite = null
let Pete: Sprite = null
let TheDetector: Sprite = null
let detectorTileList: tiles.Tile[] = []
let hideTextSprite = false
let count = 0
let textSprite = textsprite.create("")
textSprite.z = 1
count = 4
hideTextSprite = true
setupMap()
setupFish()
setupPete()
createDetectors()
createFrenchFries()
game.onUpdateInterval(100, function () {
    if (hideTextSprite == false) {
        if (count < 0 && caughtTrue == false) {
            resetTimer()
        } else {
            textSprite.setOutline(1, 15)
            count += -0.1
            textSprite.setText("" + Math.round(count))
            textSprite.setPosition(Fish.x + 10, Fish.y + 10)
        }
    } else {
        textSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
