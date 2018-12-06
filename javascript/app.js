'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('about', 'about.html'),
            new Route('choose-character', 'choose-character.html'),
            new Route('story-one', 'story-one.html'),
            new Route('story-two', 'story-two.html'),
            new Route('story-three', 'story-three.html'),
            new Route('choices-one', 'choices-one.html'),
            new Route('choices-one', 'choices-two.html'),
            new Route('choices-one', 'choices-three.html'),
            new Route('choice-result', 'choice-result.html'),
            new Route('about', 'about.html')
        ]);
    }
    init();
}());
