if (window.Worker) {
    var worker = new Worker('javascript/worker.js');

    worker.addEventListener('message', function (e) {
        var repoList = document.querySelector(".repos"),
            repos = e.data;

        repos.forEach(function (repo) {
            console.log(repo);
            var repoElement = document.createElement('li'),
                linkRepo = document.createElement('a');

            linkRepo.appendChild(document.createTextNode(repo.name));
            linkRepo.href = repo.html_url;
            linkRepo.target = '_blank';

            repoElement.appendChild(linkRepo);
            repoElement.appendChild(document.createTextNode(' - ' + repo.description));

            repoList.appendChild(repoElement);
        });

    }, false);

    worker.postMessage('');
}