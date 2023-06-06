# Eagle Eyed
!!! pied-piper ""
    ![Eagle Eyed](../../../assets/additionz/enchantments/enchanted_book.png){ align=right width=30% loading=lazy }

    | Eagle Eyed    |    |
    | ------------------- | ---------- |
    | Item | `minecraft:enchanted_book` |
    | id | `additionz:eagle_eyed` |
    | lvl | 1 |

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