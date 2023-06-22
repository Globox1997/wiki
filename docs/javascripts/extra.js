if (window.location.pathname.includes('Entities') || window.location.pathname.includes('Items')) {
    window.addEventListener('load', () => {
        icon();
    });
}

if (window.location.pathname.includes('Items')) {
    window.addEventListener('load', () => {
        crafting();
    });
}

// vanilla_crafting; smithing; furnace_smelting; anvil; fletching;
function crafting() {
    if (document.getElementsByClassName('crafting-element' != null)) {
        const vanillaCraftingPositions = [[1, [10, 10]], [2, [46, 10]], [3, [82, 10]], [4, [10, 46]], [5, [46, 46]], [6, [82, 46]], [7, [10, 82]], [8, [46, 82]], [9, [82, 82]], ['output', [202, 46]]];
        const smithingPositions = [[1, [10, 10]], [2, [46, 10]], [3, [82, 10]], ['output', [198, 10]]];
        const furnaceSmeltingPositions = [[1, [10, 18]], ['output', [130, 118]]];
        const anvilPositions = [[1, [10, 10]], [2, [108, 10]], ['output', [224, 10]]];
        const fletchingPositions = [[1, [10, 10]], [2, [10, 46]], [3, [10, 82]], [4, [96, 46]], ['output', [206, 46]]];

        const recipePositionMap = new Map([['vanilla_crafting', new Map(vanillaCraftingPositions)], ['smithing', new Map(smithingPositions)], ['furnace_smelting', new Map(furnaceSmeltingPositions)], ['anvil', new Map(anvilPositions)], ['fletching', new Map(fletchingPositions)]]);

        const elements = document.getElementsByClassName('crafting-element');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            var type = element.getAttribute('crafting-type');

            const mainDiv = document.createElement('div');
            mainDiv.style.position = 'relative';
            mainDiv.style.width = '252px';
            mainDiv.style.height = '124px';

            const backgrounDiv = document.createElement('div');
            backgrounDiv.style.position = 'absolute';
            const background = document.createElement('img');
            background.src = '/wiki/assets/general/recipe/' + type + '_background.png';
            background.className = 'recipe';
            background.alt = '';
            backgrounDiv.appendChild(background);
            mainDiv.appendChild(backgrounDiv);

            const recipePositions = recipePositionMap.get(type);

            // Ingredients
            const ingredients = element.textContent.substring(element.textContent.indexOf('input[') + 6, element.textContent.indexOf(']')).split(";");
            for (let u = 0; u < ingredients.length; u++) {
                const ingredient = ingredients[u].split('=');

                ingredient[1] = ingredient[1].split(',');
                ingredient[1][0] = replaceAll(ingredient[1][0], ' ', '');

                if (ingredient[1][0].includes(':')) {
                    ingredient[1][0] = ingredient[1][0].replace(':', '/');
                } else {
                    ingredient[1][0] = 'vanilla/' + ingredient[1][0];
                }

                const div = document.createElement('div');
                div.style.position = 'absolute';
                div.style.width = '32px';
                div.style.height = '32px';
                div.style.left = recipePositions.get(parseInt(ingredient[0]))[0] + 'px';
                div.style.top = recipePositions.get(parseInt(ingredient[0]))[1] + 'px';

                const item = document.createElement('img');
                item.src = '/wiki/assets/general/items/' + ingredient[1][0] + '.png';
                item.alt = '';
                if (ingredient[1].length == 3) {
                    tooltip(item, ingredient[1][1], replaceAll(ingredient[1][2], ' ', ''), false);
                }
                div.appendChild(item);
                mainDiv.appendChild(div);
            }

            // Output
            var output = element.textContent.substring(element.textContent.indexOf('output[') + 7, element.textContent.lastIndexOf(']')).split(',');
            output[0] = replaceAll(output[0], ' ', '');

            if (output[0].includes(':')) {
                output[0] = output[0].replace(':', '/');
            } else {
                output[0] = 'vanilla/' + output[0];
            }
            const div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.width = '32px';
            div.style.height = '32px';
            div.style.left = recipePositions.get('output')[0] + 'px';
            div.style.top = recipePositions.get('output')[1] + 'px';

            const item = document.createElement('img');
            item.src = '/wiki/assets/general/items/' + output[0] + '.png';
            item.alt = '';
            if (output.length == 3) {
                tooltip(item, output[1], replaceAll(output[2], ' ', ''), false);
            }
            div.appendChild(item);
            mainDiv.appendChild(div);

            // mainDiv
            element.textContent = "";
            element.appendChild(mainDiv);
        }
    }
}



function icon() {
    if (document.getElementsByClassName('icon-element') != null) {
        const elements = document.getElementsByClassName('icon-element');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];

            var count = parseInt(element.getAttribute('icon-count'));
            var id = element.getAttribute('icon-id');

            if (id === 'experience') {
                var imageElementString = '<img src="../../../../assets/general/misc/' + id + '.gif" alt="">';
            } else {
                var imageElementString = '<img src="../../../../assets/general/misc/' + id + '.png"  alt="" style="transform: scale(1.4) translate(0,1px); padding: 0.4%;">';
            }

            var htmlString = count + ' (' + imageElementString.repeat(count / 2) + ')';
            if (count > 20) {
                htmlString = count + ' (' + imageElementString + ' × ' + count / 2 + ')';
            }
            if (element.hasAttribute('icon-exclusive')) {
                htmlString = count + ' ' + imageElementString;
            }
            element.innerHTML = htmlString;
        }
    }
}

function tooltip(element, tooltipText, url, defaultWebsite) {
    var tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;

    element.addEventListener('mouseenter', () => {
        element.addEventListener('mousemove', () => {
            tooltip.style.left = (event.pageX + 5) + "px";
            tooltip.style.top = (event.pageY) + "px";
        });
        document.body.appendChild(tooltip);
    });
    element.addEventListener('mouseleave', () => {
        document.body.removeChild(tooltip);
    });

    element.addEventListener('click', () => {
        if (defaultWebsite) {
            window.location.href = 'https://globox1997.github.io/wiki/mods/' + url;
        } else {
            window.location.href = url;
        }
    });
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}
