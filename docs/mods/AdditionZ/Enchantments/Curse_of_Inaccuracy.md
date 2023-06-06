# Curse of Inaccuracy
!!! pied-piper ""
    ![Curse of Inaccuracy](../../../assets/additionz/enchantments/enchanted_book.png){ align=right width=30% loading=lazy }

    | Curse of Inaccuracy |  |
    | ------------------- | ---------- |
    | Item | `minecraft:enchanted_book` |
    | id | `additionz:inaccuracy_curse` |
    | lvl | 1 - 3 |

## Description

???+ danger "Incompatibility with LevelZ"
    === "With LevelZ"
        ```json
        "inaccuracy_curse_enchantment": false,
        // default: true,
        // disable when LevelZ mod is installed
        ```
        <div class="result" markdown>

        You have to **disable** this enchantment in order to use levelz properly!

        </div>

    === "Without LevelZ"
        ```json
        "inaccuracy_curse_enchantment": true,
        // default: true,
        // disable when LevelZ mod is installed
        ```

## Commands
=== "Curse of Inaccuracy I"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:inaccuracy_curse",lvl:1s}]}
    ```
=== "Curse of Inaccuracy II"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:inaccuracy_curse",lvl:2s}]}
    ```
=== "Curse of Inaccuracy III"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:inaccuracy_curse",lvl:3s}]}
    ```