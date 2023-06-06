# Dexterity
!!! pied-piper ""
    ![Dexterity](../../../assets/additionz/enchantments/enchanted_book.png){ align=right width=30% loading=lazy }

    | Dexterity    |    |
    | ------------------- | ---------- |
    | Item | `minecraft:enchanted_book` |
    | id | `additionz:dexterity` |
    | lvl | 1 - 3 |

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