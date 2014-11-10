importScripts('jquery.hive.pollen.js');

$(function (data) {

    var page = 1,
        per_page = 3,
        time = 2000;

    setInterval(function () {
        var url = 'https://api.github.com/users/rodrigo-morais/repos?page=' + page + '&per_page=' + per_page;

        $.ajax.get({
            url: url,
            dataType: 'json',
            success: function (repos) {

                self.postMessage(repos);

                if (repos.length === 0) {
                    self.close();
                }
            }
        });

        page = page + 1;

    }, time);
});