# Stampede
<div class="combi" markdown>
<div class="divthing">
<table class="tablething">
    <thead>
        <tr>
            <th class="first-column">Infos</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="first-column">Item</td>
            <td class="second-column">minecraft:enchanted_book</td>
        </tr>
        <tr>
            <td class="first-column">ID</td>
            <td class="second-column">additionz:stampede</td>
        </tr>
        <tr>
            <td class="first-column">Level</td>
            <td class="second-column">1 - 3</td>
        </tr>
    </tbody>
</table>
</div>
<div markdown>
![](../../../assets/additionz/enchantments/enchanted_book.png){ loading=lazy }
</div>
</div>

## Description

```json
"Stampede_enchantment": true,
// default: true,
```
<div class="result" markdown>
![Enchantment in action](https://i.imgur.com/Euf5EOK.gif){ align=left width=40% loading=lazy }
</div>

## Commands
=== "Stampede I"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:stampede",lvl:1s}]}
    ```
=== "Stampede II"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:stampede",lvl:2s}]}
    ```
=== "Stampede III"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:stampede",lvl:3s}]}
    ```