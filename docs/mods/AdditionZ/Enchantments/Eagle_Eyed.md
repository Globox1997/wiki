# Eagle Eyed
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
            <td class="second-column">additionz:eagle_eyed</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Level</td>
            <td class="second-column">1</td>
        </tr>
    </tbody>
</table>
</div>
<div markdown>
<img src="../../../../assets/additionz/enchantments/enchanted_book.png" loading="lazy" />
</div>
</div>

## Description

```json
"eagle_eyed_enchantment": true,
// default: true,
```
<div class="result" markdown>
![Enchantment in action](https://i.imgur.com/q4klBpc.gif){ align=left width=40% loading=lazy }
</div>

## Command
=== "Eagle Eyed I"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:eagle_eyed",lvl:1s}]}
    ```