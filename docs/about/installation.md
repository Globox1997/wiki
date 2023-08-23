Here you find information for how to install fabric mods.  
There are plenty of youtube tutorials but here you find just a simple step by step guide for how to install a fabric mod.

## Fabric Loader
To install fabric mods you have to install the fabric loader. If you have already done this, go the next step.  
You can find a more in depth guide at the [fabric wiki](https://fabricmc.net/wiki/player:tutorials:start#installing_fabric_loader).  
The fabric loader has to get installed on the launcher you are using.

### Mojang's Minecraft Launcher
1. Download the Fabric installer from the [download page](https://fabricmc.net/use/installer/).  
2. Open the installer. In the window you need to configure the mapping and loader version (latest loader version is recommended) and the install location (the default should be fine on most platforms).
NOTE You need to enable snapshots in order to make the installer show mapping options for Minecraft snapshots.
3. Press Install. A new game version and profile will be created in the launcher's menu, which you can now use to launch Fabric.
4. You may then want to launch your newly created instance once, and then add [Fabric API](https://modrinth.com/mod/fabric-api/versions) to your instance's mods folder as most mods will need it

### Other Minecraft Launcher
Check out your launchers website, there you will find information for how to install a fabric loader instance.

## Mods
This final step is very easy and a good description can be found [here](https://fabricmc.net/wiki/player:tutorials:adding_mods).  
Mods can be found on [CurseForge](https://www.curseforge.com/minecraft/mc-mods) or [Modrinth](https://modrinth.com/mods), all other websites are not recommended!  
To download a mod from Curseforge, find the mod you want to download. The version you are downloading has to be compatible with fabric!  

### Install
If you are using the official Minecraft Launcher, move the downloaded JAR file (which is probably at your downloads folder) into your mods folder, found in your Minecraft installation:

- Windows - %appdata%\.minecraft\
- MacOS - ~/Library/Application Support/minecraft
- Linux - ~/.minecraft

That's it. Now start Minecraft with the fabric instance and `et voilà`, if you have not forgotten any mod dependency, everything should work and you can start playing!