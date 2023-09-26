---
title: Developer
project: docs
---
# Developer

To add Globox_Z mods to your project as a dependency, begin by including the modrinth maven in the repositories block of your `build.gradle`

```groovy title="build.gradle"
repositories {
    maven { url 'https://api.modrinth.com/maven' }
}
```

Then, declare the dependency inside your `dependencies` block and as well as the version you want to use inside your `gradle.properties`

=== "build.gradle"
    ```groovy 
    dependencies {
        modImplementation "maven.modrinth:modid:${project.modid_version}"
    }
    ```

=== "gradle.properties"
    ```

    modid_version=...
    ```

Check out the [modrinth](https://modrinth.com/mods) page for the version you are looking for, usually ending +mc_version (e.g. +1.20.1).