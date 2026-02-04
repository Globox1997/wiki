---
title: Dungeon Spawner
project: dungeonz
summary: dungeonz block dungeon spawner
---
# Dungeon Spawner
<div class="main_table">
<div class="left_main_table">
<table class="left_table">
    <tbody>
        <tr>
            <td class="first-column">ID</td>
            <td class="second-column long-id">
            ```
            dungeonz:dungeon_spawner
            ```
            </td>
        </tr>
        <tr id="linear-top">
            <td class="first-column"><a href="https://minecraft.wiki/w/Renewable_resource" target="_blank">Renewable</a></td>
            <td class="second-column">No</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Stackable</td>
            <td class="second-column">Yes (64)</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column"><a href="https://minecraft.wiki/w/Explosion#Blast_resistance" target="_blank">Blast Resistance</a></td>
            <td class="second-column">3.600.000</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column"><a href="https://minecraft.wiki/w/Breaking#Blocks_by_hardness" target="_blank">Hardness</a></td>
            <td class="second-column">-1</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column"><a href="https://minecraft.wiki/w/Light" target="_blank">Luminous</a></td>
            <td class="second-column">No</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column"><a href="https://minecraft.wiki/w/Opacity" target="_blank">Transparent</a></td>
            <td class="second-column">No</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column"><a href="https://minecraft.wiki/w/Waterlogging" target="_blank">Waterloggable</a></td>
            <td class="second-column">No</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column"><a href="https://minecraft.wiki/w/Fire#Burning_blocks" target="_blank">Flammable</a></td>
            <td class="second-column">No</td>
        </tr>
    </tbody>
</table>
</div>
    <img src="/wiki/assets/dungeonz/blocks/dungeon_spawner.png" loading="lazy" class="right_img_table"/>
</div>

## Description
The dungeon spawner block is a [block](https://minecraft.wiki/w/Block) generated inside a dungeon. It is similar to the [monster spawner](https://minecraft.wiki/w/Monster_Spawner). It constantly [summons instances](https://minecraft.wiki/w/Mob_spawning) of the [mob](https://minecraft.wiki/w/Mob) displayed within it as long as a [player](https://minecraft.wiki/w/Player) is in range and it is [dark enough](https://minecraft.wiki/w/Light) for that [mob type](https://minecraft.wiki/w/Mob) to spawn nearby. The difference to a normal [monster spawner](https://minecraft.wiki/w/Monster_Spawner) is that it will break by itself if too many [mobs](https://minecraft.wiki/w/Mob) are spawned.

## Obtaining
The dungeon spawner block cannot be obtained as an [item](https://minecraft.wiki/w/Item) only by using the /give [command](https://minecraft.wiki/w/Commands), in [Creative mode](https://minecraft.wiki/w/Creative) by taking it from Creative inventory or by using pick block.

## Usage
A dungeon spawner spawns [mobs](https://minecraft.wiki/w/Mob) in an (at most) 9×3×9 volume (see § Mechanics) around it when the [player](https://minecraft.wiki/w/Player) is within 16 [blocks](https://minecraft.wiki/w/Block). Suitable spawning locations for the block's mob type are provided in or around the spawning volume. The dungeon spawner attempts to spawn four [mobs](https://minecraft.wiki/w/Mob) around it, then waits from 10 to 39.95 seconds before attempting to spawn more. A [spawn egg](https://minecraft.wiki/w/Spawn_Egg) can be used on it to change its mob type. The [mob](https://minecraft.wiki/w/Mob) count of the spawner until it breaks can be set via the dungeon datapack.
