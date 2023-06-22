---
title: Block Piercing
project: additionz
summary: additionz enchantment block piercing
---
# Block Piercing
<div class="combi">
<div class="divthing">
<table class="tablething">
    <tbody>
        <tr>
            <td class="first-column">Item</td>
            <td class="second-column">minecraft:enchanted_book</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">ID</td>
            <td class="second-column">additionz:block_piercing</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Level</td>
            <td class="second-column">1 - 3</td>
        </tr>
    </tbody>
</table>
</div>
<div class="div-img-center">
<img src="../../../../assets/additionz/enchantments/enchanted_book.png" loading="lazy" />
</div>
</div>

## Description

```json
"block_pearcing_enchantment": true,
// default: true,
```
<div class="result" markdown>
![Enchantment in action](https://i.imgur.com/IXTpxoE.gif){ align=left width=40% loading=lazy }
</div>

## Commands
=== "Block Piercing I"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:block_piercing",lvl:1s}]}
    ```
=== "Block Piercing II"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:block_piercing",lvl:2s}]}
    ```
=== "Block Piercing III"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:block_piercing",lvl:3s}]}
    ```