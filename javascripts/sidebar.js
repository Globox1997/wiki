window.addEventListener('DOMContentLoaded', () => {
    sidebar();
    changelog();
});

//https://www.gnu.org/licenses/gpl-3.0.html
//https://opensource.org/license/mit/

//https://modrinth.com/mod/slug
//https://www.curseforge.com/minecraft/mc-mods/slug

async function sidebar() {

    var modid = document.querySelector('script[src="/wiki/javascripts/sidebar.js"]').getAttribute('id');
    const repositoryData = await getRepositoryData('repository', modid);

    if (repositoryData !== undefined) {
        var newDiv = document.createElement("div");
        // About Header
        var about = document.createElement("span");
        about.className = 'md-nav__title';
        about.textContent = "About project";

        // Downloads
        var downloads = document.createElement("ul");
        var downloadsText = document.createElement("span");
        var downloadsLoaders = document.createElement("span");
        var downloadsModrinth = document.createElement("span");
        var downloadsModrinthIcon = document.createElement("span");
        var downloadsCurseforge = document.createElement("span");
        var downloadsCurseforgeIcon = document.createElement("span");
        var modrinthLink = document.createElement('a');
        var curseforgeLink = document.createElement('a');

        downloads.style.display = 'flex';
        downloads.className = 'md-nav__item';

        downloadsText.textContent = 'Downloads:';
        downloadsText.style.width = '40%';

        downloadsLoaders.style.display = 'flex';
        downloadsLoaders.style.flexDirection = 'column';

        downloadsModrinth.classList.add('count-up-element');
        downloadsModrinth.classList.add('md-nav__link');

        downloadsModrinth.setAttribute('src', modid);
        downloadsModrinth.setAttribute('file', 'modrinth');
        downloadsModrinth.style.verticalAlign = 'top';

        downloadsCurseforge.classList.add('count-up-element');
        downloadsCurseforge.classList.add('md-nav__link');
        downloadsCurseforge.setAttribute('src', modid);
        downloadsCurseforge.setAttribute('file', 'curseforge');
        downloadsCurseforge.style.verticalAlign = 'top';

        var newModId = document.querySelector('script[src="/wiki/javascripts/sidebar.js"]').getAttribute('link');

        if (newModId === null) {
            newModId = modid;
        }

        modrinthLink.href = 'https://modrinth.com/mod/' + newModId;
        // modrinthLink.target = '_blank';

        curseforgeLink.href = 'https://www.curseforge.com/minecraft/mc-mods/' + newModId;
        // curseforgeLink.target = '_blank';

        // modrinth icon / downloads
        var downloadsModrinthIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        downloadsModrinthIconSvg.classList.add('svg-image');
        downloadsModrinthIconSvg.setAttribute('viewBox', '0 0 24 24');
        var downloadsModrinthIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

        downloadsModrinthIconPath.setAttribute('d', 'M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z');
        downloadsModrinthIconSvg.appendChild(downloadsModrinthIconPath);
        downloadsModrinthIcon.appendChild(downloadsModrinthIconSvg);

        modrinthLink.appendChild(downloadsModrinth);
        downloadsModrinthIcon.appendChild(modrinthLink);
        downloadsModrinthIcon.style.marginBottom = '0.8em';

        // curseforge link / downloads
        var downloadsCurseforgeIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        downloadsCurseforgeIconSvg.classList.add('svg-image');
        downloadsCurseforgeIconSvg.setAttribute('viewBox', '0 0 24 24');
        var downloadsCurseforgeIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

        downloadsCurseforgeIconPath.setAttribute('d', 'M18.326 9.2145S23.2261 8.4418 24 6.1882h-7.5066V4.4H0l2.0318 2.3576V9.173s5.1267-.2665 7.1098 1.2372c2.7146 2.516-3.053 5.917-3.053 5.917L5.0995 19.6c1.5465-1.4726 4.494-3.3775 9.8983-3.2857-2.0565.65-4.1245 1.6651-5.7344 3.2857h10.9248l-1.0288-3.2726s-7.918-4.6688-.8336-7.1127z');
        downloadsCurseforgeIconSvg.appendChild(downloadsCurseforgeIconPath);
        downloadsCurseforgeIcon.appendChild(downloadsCurseforgeIconSvg);

        curseforgeLink.appendChild(downloadsCurseforge);
        downloadsCurseforgeIcon.appendChild(curseforgeLink);

        downloadsLoaders.appendChild(downloadsModrinthIcon);
        downloadsLoaders.appendChild(downloadsCurseforgeIcon);

        downloads.appendChild(downloadsText);
        downloads.appendChild(downloadsLoaders);


        // Creation Date
        var createdDate = document.createElement("ul");
        var createdText = document.createElement("span");
        var created = document.createElement("span");

        createdDate.style.display = 'flex';
        createdDate.className = 'md-nav__item';

        createdText.textContent = 'Created:';
        createdText.style.width = '40%';

        created.classList.add('sidebar');
        created.textContent = repositoryData['created_at'];
        created.style.textAlign = 'left'

        createdDate.appendChild(createdText);
        createdDate.appendChild(created);

        // Update Date
        var updatedDate = document.createElement("ul");
        var updatedText = document.createElement("span");
        var updated = document.createElement("span");

        updatedDate.style.display = 'flex';
        updatedDate.className = 'md-nav__item';

        updatedText.textContent = 'Updated:';
        updatedText.style.width = '40%';

        updated.classList.add('sidebar');
        updated.textContent = repositoryData['updated_at'];
        updated.style.textAlign = 'left'

        updatedDate.appendChild(updatedText);
        updatedDate.appendChild(updated);

        // Project Id
        var projectId = document.createElement("ul");
        var projectIdText = document.createElement("span");
        var project = document.createElement("span");

        projectId.style.display = 'flex';
        projectId.className = 'md-nav__item';

        projectIdText.textContent = 'Project Id:';
        projectIdText.style.width = '40%';

        project.classList.add('sidebar');
        project.classList.add('md-nav__link');
        project.textContent = modid;

        project.addEventListener("click", function (event) {

            var textarea = document.createElement("textarea");
            // this won't work since copy requires on screen
            //    textarea.style.display = "none";
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            textarea.value = modid;
            document.body.appendChild(textarea);
            textarea.select();

            try {
                document.execCommand("copy");

                var copied = document.createElement("div");
                copied.textContent = 'Copied';
                copied.classList.add('tooltip');
                copied.style.left = (event.pageX - window.scrollX) + "px";
                copied.style.top = (event.pageY - window.scrollY) + "px";
                document.body.appendChild(copied);

                project.style.cursor = "default";
                setTimeout(function () {
                    project.style.cursor = "pointer";
                    document.body.removeChild(copied);
                    document.body.removeChild(textarea);
                }, 1000);
            } catch (err) {
                console.error("Unable to copy text to clipboard:", err);
            }
        });

        projectId.appendChild(projectIdText);
        projectId.appendChild(project);

        //License
        var license = document.createElement("ul");
        var licenseText = document.createElement("span");
        var licenseLink = document.createElement("a");

        license.className = 'md-nav__item';
        license.style.display = 'flex';

        licenseText.textContent = 'License:'
        licenseText.style.width = '40%';

        licenseLink.className = 'md-nav__link';
        licenseLink.classList.add('sidebar');
        licenseLink.textContent = repositoryData['license'];
        if (repositoryData['license'].includes('GPL')) {
            licenseLink.href = 'https://www.gnu.org/licenses/gpl-3.0.html';
        }
        else {
            licenseLink.href = 'https://opensource.org/license/mit/';
        }
        licenseLink.target = '_blank';
        license.appendChild(licenseText);
        license.appendChild(licenseLink);

        // Issues
        var issues = document.createElement("ul");
        var issuesText = document.createElement("span");
        var issuesCount = document.createElement("a");

        issues.className = 'md-nav__item';
        issues.style.display = 'flex';

        issuesText.textContent = 'Issues:'
        issuesText.style.width = '40%';

        issuesCount.className = 'md-nav__link';
        issuesCount.classList.add('sidebar');
        issuesCount.textContent = repositoryData['open_issues'];
        issuesCount.href = 'https://github.com/Globox1997/' + modid + '/issues';

        issues.appendChild(issuesText);
        issues.appendChild(issuesCount);

        // Versions
        var versions = document.createElement("ul");
        var versionSpan = document.createElement("span");
        var versionText = document.createElement("span");

        versions.className = 'md-nav__item';
        versions.style.display = 'flex';

        versionText.textContent = 'Versions:';
        versionText.style.width = '40%';

        versionSpan.style.display = 'flex';
        versionSpan.style.flexDirection = 'column';

        versions.appendChild(versionText);
        const gameVersions = repositoryData['game_versions'];
        const versionElement = [];
        for (let i = gameVersions.length - 1; i >= 0; i--) {
            let specific = document.createElement("a");
            specific.className = 'md-nav__link';
            specific.classList.add('sidebar');
            specific.href = 'https://www.curseforge.com/minecraft/mc-mods/' + modid + '/files?version=' + gameVersions[i];
            // specific.target = '_blank';
            specific.textContent = gameVersions[i];
            specific.style.marginBottom = '0.8em';
            versionSpan.appendChild(specific);

            if (gameVersions.length > 3 && i === gameVersions.length - 2) {
                var expandButton = document.createElement("button");
                expandButton.className = 'md-nav__link';
                expandButton.classList.add('sidebar');
                expandButton.style.opacity = 0.7;
                expandButton.textContent = '...';
                expandButton.addEventListener("click", function () {
                    expandButton.style.display = "none";
                    for (let j = 0; j < versionElement.length; j++) {
                        versionElement[j].style.display = "flex";
                    }
                });
                versionSpan.appendChild(expandButton);
            }
            if (i < gameVersions.length - 2) {
                specific.style.display = "none";
                versionElement.push(specific);
            }
        }
        versions.appendChild(versionSpan);

        // adds all new uls to the sidebar
        newDiv.appendChild(about);
        newDiv.appendChild(downloads);
        newDiv.appendChild(createdDate);
        newDiv.appendChild(updatedDate);
        newDiv.appendChild(projectId);
        newDiv.appendChild(license);
        newDiv.appendChild(issues);
        newDiv.appendChild(versions);

        var parentDiv = document.querySelector(".md-nav.md-nav--secondary");
        var firstChild = parentDiv.firstChild;
        parentDiv.insertBefore(newDiv, firstChild);

    }
}

async function changelog() {
    if (document.getElementById('log') != null) {
        const modid = document.getElementById('log').getAttribute('modid');

        const repositoryData = await getRepositoryData('changelog', modid);
        if (repositoryData !== undefined) {

            console.log(repositoryData[modid])

            var changelogText = "";

            Object.entries(repositoryData[modid]).forEach(([version, releaseNotes]) => {
                let processText = marked.parse(repositoryData[modid][version]);
                processText = "<details><summary>" + version + "</summary>" + processText + "</details>"
                changelogText = changelogText + processText;
            });

            document.getElementById('log').innerHTML = changelogText;
        }
    }
}