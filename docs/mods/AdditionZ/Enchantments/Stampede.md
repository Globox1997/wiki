# Stampede
!!! pied-piper ""
    ![Stampede](../../../assets/additionz/enchantments/enchanted_book.png){ align=right width=30% loading=lazy }

    | Stampede    |    |
    | ------------------- | ---------- |
    | Item | `minecraft:enchanted_book` |
    | id | `additionz:stampede` |
    | lvl | 1 - 3 |

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