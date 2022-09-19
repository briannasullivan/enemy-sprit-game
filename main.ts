input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Player: game.LedSprite = null
Player = game.createSprite(0, 0)
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        basic.pause(5000)
        control.reset()
    }
})
