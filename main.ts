input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Player: game.LedSprite = null
Player = game.createSprite(0, 0)
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
	
})
