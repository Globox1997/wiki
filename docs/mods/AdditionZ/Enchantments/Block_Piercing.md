# Block Piercing
!!! pied-piper ""
    ![Block Piercing](../../../assets/additionz/enchantments/enchanted_book.png){ align=right width=30% loading=lazy }

    | Block Piercing    |    |
    | ------------------- | ---------- |
    | Item | `minecraft:enchanted_book` |
    | id | `additionz:block_piercing` |
    | lvl | 1 - 3 |

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