const splashTexts = [
    'Now with more Orcs!',
    'Fabric only!',
    'Made in Germany!',
    'Stay hydrated!',
    'Watch your stamina!',
    'Level up!',
    'Beware the Void!',
    'Ride the Ender Whale!',
    'Mammoths included!',
    'Contains real dragons!',
    'Smells a bit spoiled!',
    'Back slot ready!',
    'Dual wield everything!',
    'Tiered loot!',
    'Ask a villager!',
    'Party up!',
    'Sit on a log!',
    'Talk bubbles!',
    'Farm responsibly!',
    'The herd is panicking!',
    'Gilded, not golden!',
    'Smelted in Cupellation!',
    'Rare, epic, legendary!',
    'Medieval music on repeat!',
    'Try the quiz!',
    'Item of the Day!',
    'Drag, drop, score!',
    'Respawn in 3, 2, 1...',
    'Over 9000 hearts!',
    'Lore not included!',
    'Now with more Z!',
    'Since 2019!',
    'Mod count: still rising!',
    'Built with MkDocs!',
    'Click me!',
    'Don\'t dig straight down!',
    'Shadow chest inside!',
    'Fiery netherite!',
    'Reviving in progress!',
    'Rewards await!',
    'Pet the deer!',
    'Iguanas are friends!',
    'Nightmares come at night!',
    'Summoners summon!',
    'The Eye is watching!',
    'Golems guard the gate!',
    'Shamans know things!',
    'Skeleton vanguard, assemble!',
    'Blaze guardian on duty!',
    'Brown fungus, red fungus!',
    'Wither puppets dance!',
    'Desert rhinos charge!',
    'Necromancers rise!',
    'Soul reapers reap!',
    'Explore the dungeons!',
    'Temples hide secrets!',
    'Cook it twice!',
    'Golden potatoes!',
    'Seasons change!',
    'Too hot, too cold!',
    'Drink purified water!',
    'Eat your vegetables!',
    'Nutrition matters!',
    'Name your plates!',
    'Sell the loot!',
    'Coins, coins, coins!',
    'Quests for everyone!',
    'Jobs pay off!',
    'Remove that recipe!',
    'Sharpen your blade!',
    'Forged in SmitherZ!',
    'Spartan approved!',
    'Medieval vibes!',
    'Pick a difficulty!',
    'Dragon scales shine!',
    'Fiery or scarlet?',
    'Solarite glows!',
    'The Oblivion awaits!',
    'Welcome aboard!',
    'Travel far!',
    'Early stage, big dreams!',
    'Smelt, cast, repeat!',
    'Flesh is just meat!',
    'Untamed and proud!',
    '100% handmade renders!',
    'Read the changelog!',
    'Open source!',
    'Bug reports welcome!',
    'Join the Discord!',
    'Also try Aged!',
    'Rays of 3D rails!',
    'Ladders, but 3D!',
    'Now in pastel!',
    'Ctrl + F works too!',
    'Built on Fabric!',
    'Crafted with care!',
    'Fully hydrated!',
    'Splash!',
    'You need a drill!',
    'You need a stationary drill!',
];

const rareSplashTexts = [
    'You found a rare splash!',
    'One in a thousand!',
    'Shiny splash!',
    'Legendary drop!',
    'Screenshot this!'
];

window.addEventListener('DOMContentLoaded', () => {
    splash();
});

function randomSplash(current) {
    let text = current;
    while (text === current) {
        text = splashTexts[Math.floor(Math.random() * splashTexts.length)];
    }
    return text;
}

function splash() {
    const source = document.querySelector('.md-header__source');
    if (!source) {
        return;
    }
    const splashElement = document.createElement('span');
    splashElement.className = 'splash-text';
    splashElement.title = 'Click for another one';

    const season = typeof wikiSeason === 'function' ? wikiSeason() : null;
    if (Math.random() < 0.001 || (typeof wikiEgg === 'function' && wikiEgg('rare'))) {
        splashElement.textContent = rareSplashTexts[Math.floor(Math.random() * rareSplashTexts.length)];
        splashElement.classList.add('splash-text--rare');
    } else if (season && season.splash) {
        splashElement.textContent = season.splash;
    } else {
        splashElement.textContent = randomSplash(null);
    }

    splashElement.addEventListener('click', (event) => {
        event.preventDefault();
        splashElement.classList.remove('splash-text--rare');
        splashElement.textContent = randomSplash(splashElement.textContent);
    });
    source.appendChild(splashElement);
}
