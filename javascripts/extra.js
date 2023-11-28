if (window.location.pathname.includes('Entities') || window.location.pathname.includes('Items')) {
    window.addEventListener('DOMContentLoaded', () => {
        icon();
    });
}

if (window.location.pathname.includes('Items') || window.location.pathname.includes('Blocks')) {
    window.addEventListener('DOMContentLoaded', () => {
        crafting();
        table();
    });
}

if (window.location.pathname.includes('Structures')) {
    window.addEventListener('DOMContentLoaded', () => {
        structure();
    });
}

function table() {
    if (document.getElementById('crafting-table') != null) {
        const tableContainer = document.getElementById('crafting-table');

        const table = document.createElement('table');
        const headerRow = document.createElement("tr");

        const ingredientCell = document.createElement("th");
        ingredientCell.textContent = "Ingredients";
        ingredientCell.style.textAlign = "center";
        const recipeCell = document.createElement("th");
        recipeCell.textContent = "Recipe";
        recipeCell.style.textAlign = "center";
        const descriptionCell = document.createElement("th");
        descriptionCell.textContent = "Description";
        descriptionCell.style.textAlign = "center";

        headerRow.appendChild(ingredientCell);
        headerRow.appendChild(recipeCell);
        headerRow.appendChild(descriptionCell);

        table.appendChild(headerRow);

        const elements = document.getElementsByClassName('crafting-element');
        for (let k = 0; k < elements.length; k++) {
            const element = elements[k];
            const dataRow = document.createElement("tr");

            for (let j = 0; j < 3; j++) {
                const dataCell = document.createElement("td");
                dataCell.style.verticalAlign = "middle";
                if (j === 0) {
                    for (let o = 0; o < element.data.length; o += 2) {
                        if (o > 0) {
                            var plusSpan = document.createElement("span");
                            plusSpan.textContent = " + ";
                            dataCell.appendChild(plusSpan);
                            var lineBreak = document.createElement("br");
                            dataCell.appendChild(lineBreak);
                        }
                        var linkElement = document.createElement("a");
                        linkElement.href = element.data[o + 1];
                        linkElement.textContent = element.data[o];

                        dataCell.appendChild(linkElement);
                    }
                } else if (j === 1) {
                    element.style.display = "contents";
                    dataCell.appendChild(element);
                    k--;
                } else {
                    dataCell.textContent = element.description;
                }
                dataRow.appendChild(dataCell);
            }
            table.appendChild(dataRow);
        }

        tableContainer.appendChild(table);
    }
}

// vanilla_crafting; smithing; furnace_smelting; anvil; fletching; brewing; stonecutting;
const vanillaCraftingPositions = [[1, [10, 10]], [2, [46, 10]], [3, [82, 10]], [4, [10, 46]], [5, [46, 46]], [6, [82, 46]], [7, [10, 82]], [8, [46, 82]], [9, [82, 82]], ['output', [202, 46]], ['size', [256, 124]]];
const smithingPositions = [[1, [10, 10]], [2, [46, 10]], [3, [82, 10]], ['output', [198, 10]], ['size', [240, 52]]];
const furnaceSmeltingPositions = [[1, [10, 18]], ['output', [130, 18]], ['size', [180, 92]]];
const anvilPositions = [[1, [10, 10]], [2, [108, 10]], ['output', [224, 10]], ['size', [266, 52]]];
const fletchingPositions = [[1, [10, 10]], [2, [10, 46]], [3, [10, 82]], [4, [96, 46]], ['output', [206, 46]], ['size', [256, 124]]];
const brewingPositions = [[1, [134, 14]], [2, [88, 82]], ['output', [180, 82]], ['size', [256, 138]]];
const stonecuttingPositions = [[1, [10, 10]], ['output', [126, 10]], ['size', [168, 52]]];

const recipePositionMap = new Map([['vanilla_crafting', new Map(vanillaCraftingPositions)], ['smithing', new Map(smithingPositions)], ['furnace_smelting', new Map(furnaceSmeltingPositions)], ['anvil', new Map(anvilPositions)], ['fletching', new Map(fletchingPositions)], ['brewing', new Map(brewingPositions)], ['stonecutting', new Map(stonecuttingPositions)]]);

function crafting() {
    if (document.getElementsByClassName('crafting-element' != null)) {
        const elements = document.getElementsByClassName('crafting-element');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];

            var type = element.getAttribute('crafting-type');
            const recipePositions = recipePositionMap.get(type);

            const mainDiv = document.createElement('div');
            mainDiv.style.position = 'relative';
            mainDiv.style.width = recipePositions.get('size')[0] + 'px';
            mainDiv.style.height = recipePositions.get('size')[1] + 'px';

            const backgrounDiv = document.createElement('div');
            backgrounDiv.style.position = 'absolute';
            const background = document.createElement('img');
            background.src = '/wiki/assets/general/recipe/' + type + '_background.png';
            background.alt = '';
            backgrounDiv.appendChild(background);
            mainDiv.appendChild(backgrounDiv);

            const ingredientData = [];
            // Ingredients
            const ingredients = element.textContent.substring(element.textContent.indexOf('input[') + 6, element.textContent.indexOf(']')).split(";");
            for (let u = 0; u < ingredients.length; u++) {
                const ingredient = ingredients[u].split('=');

                ingredient[1] = ingredient[1].split(',');
                ingredient[1][0] = replaceAll(ingredient[1][0], ' ', '');

                var isDamaged = false;
                if (ingredient[1][0].startsWith('damaged_') || ingredient[1][0].includes('damaged_')) {
                    ingredient[1][0] = ingredient[1][0].replace('damaged_', '');
                    isDamaged = true;
                }

                if (ingredient[1][0].includes(':')) {
                    ingredient[1][0] = ingredient[1][0].replace(':', '/');
                } else {
                    ingredient[1][0] = 'vanilla/' + ingredient[1][0];
                }
                if (!ingredientData.includes(ingredient[1][1])) {
                    ingredientData.push(ingredient[1][1])
                    ingredientData.push(ingredient[1][2])
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
                // prints still error message :/
                item.onerror = function () {
                    try {
                        if (!item.src.includes('blocks')) {
                            item.src = '/wiki/assets/general/blocks/' + ingredient[1][0] + '.png';
                        } else if (!item.src.includes('missing')) {
                            item.src = '/wiki/assets/general/items/vanilla/missing.png';
                        }
                    }
                    catch (error) {
                    }
                    return true;
                };
                item.style.display = 'inline-block';
                div.appendChild(item);

                if (ingredient[1].length >= 3) {
                    tooltip(item, ingredient[1][1], replaceAll(ingredient[1][2], ' ', ''), (ingredient[1].length > 3 ? ingredient[1][3] : false));
                } else if (ingredient[1].length == 2) {
                    tooltip(item, ingredient[1][1], null, null);
                }

                if (isDamaged) {
                    const damaged = document.createElement('img');
                    damaged.src = '/wiki/assets/general/items/misc/damaged.png';
                    damaged.alt = '';
                    damaged.style.position = 'absolute';
                    damaged.style.left = 0;
                    damaged.style.top = 0;
                    damaged.style.pointerEvents = 'none';
                    div.appendChild(damaged);
                }
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
            item.onerror = function () {
                try {
                    if (!item.src.includes('blocks')) {
                        item.src = '/wiki/assets/general/blocks/' + output[0] + '.png';
                    } else if (!item.src.includes('missing')) {
                        item.src = '/wiki/assets/general/items/vanilla/missing.png';
                    }
                } catch (error) {
                }
                return true;
            };

            if (output.length >= 3) {
                tooltip(item, output[1], replaceAll(output[2], ' ', ''), (output.length > 3 ? output[3] : false));
            } else if (output.length == 2) {
                tooltip(item, output[1], null, null);
            }
            div.appendChild(item);
            mainDiv.appendChild(div);
            element.data = ingredientData;
            if (element.textContent.indexOf('description="') === -1) {
                element.description = "-";
            } else {
                element.description = element.textContent.substring(element.textContent.indexOf('description="') + 13, element.textContent.lastIndexOf('"'));
            }

            element.textContent = "";
            element.appendChild(mainDiv);
        }
    }
}

// armor, experience, heart, hunger, melee, projectile, saturation, thirst, explosion
function icon() {
    if (document.getElementsByClassName('icon-element') != null) {
        const elements = document.getElementsByClassName('icon-element');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];

            var count = parseFloat(element.getAttribute('icon-count'));
            var id = element.getAttribute('icon-id');

            var isHalf = false;
            if (id === 'armor' || id === 'heart' || id === 'hunger' || id === 'saturation' || id === 'thirst') {
                isHalf = (Number.isInteger(count) && count % 2 === 0) || count > 20 ? false : true;
                var half = '<img src="../../../../assets/general/misc/half_' + id + '.png"  alt="" style="transform: scale(1.4) translate(0,1px); padding: 0.4%;">';
            }


            var imageElementString = '<img src="../../../../assets/general/misc/' + id + '.png"  alt="" style="transform: scale(1.4) translate(0,1px); padding: 0.4%;">';
            if (id === 'experience') {
                imageElementString = '<img src="../../../../assets/general/misc/' + id + '.gif" alt="">';
            }
            var htmlString = count + ' (' + imageElementString.repeat(count / 2) + (isHalf ? half : '') + ')';

            if (count > 20) {
                htmlString = count + ' (' + imageElementString + ' × ' + count / 2 + ')';
            }
            if (element.hasAttribute('icon-exclusive')) {
                htmlString = count + ' ' + imageElementString;
                if (id === 'experience') {
                    htmlString = htmlString + ' <a href="https://minecraft.wiki/w/Experience">Experience</a>';
                }
            }

            if (element.innerHTML === '') {
                element.innerHTML = htmlString;
            } else {
                element.innerHTML = htmlString + '<br>' + element.innerHTML;
            }
        }
    }
}

function structure() {
    // <div id="block-table">
    // 81=blackstone, Blackstone, 
    // 4=adventurez:chiseled_polished_blackstone_holder;
    //  </div> 
}

function tooltip(element, tooltipText, url, defaultWebsite) {
    var tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;

    element.addEventListener('mouseenter', () => {
        element.addEventListener('mousemove', (event) => {
            tooltip.style.left = (event.pageX - window.scrollX + 5) + "px";
            tooltip.style.top = (event.pageY - window.scrollY) + "px";
        });
        document.body.appendChild(tooltip);
    });
    element.addEventListener('mouseleave', () => {
        document.body.removeChild(tooltip);
    });
    if (url !== null) {
        element.addEventListener('click', () => {
            if (defaultWebsite) {
                window.location.href = 'https://globox1997.github.io/wiki/mods/' + url;
            } else {
                window.location.href = url;
            }
        });
    }
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}
