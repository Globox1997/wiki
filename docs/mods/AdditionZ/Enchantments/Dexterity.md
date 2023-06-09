# Dexterity
<div class="combi" markdown>
<div class="divthing">
<table class="tablething">
    <tbody>
        <tr>
            <td class="first-column">Item</td>
            <td class="second-column">minecraft:enchanted_book</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">ID</td>
            <td class="second-column">additionz:dexterity</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Level</td>
            <td class="second-column">1 - 3</td>
        </tr>
    </tbody>
</table>
</div>
<div>
<img src="../../../../assets/additionz/enchantments/enchanted_book.png" loading="lazy" />
</div>
</div>

## Description

```json
"dexterity_enchantment": true,
// default: true,
```
<div class="result" markdown>
![Enchantment in action](https://i.imgur.com/TC1scQL.gif){ align=left width=40% loading=lazy }
</div>

## Commands
=== "Dexterity I"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:dexterity",lvl:1s}]}
    ```
=== "Dexterity II"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:dexterity",lvl:2s}]}
    ```
=== "Dexterity III"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:dexterity",lvl:3s}]}
    ```