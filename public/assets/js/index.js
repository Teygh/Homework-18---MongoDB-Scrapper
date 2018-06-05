// This file holds the JS code that effects the Index Page
$(documenet).ready(function () {


    var articleContainer = $(".article-container");
    $(document).on("click", ".btn.save", handleArticleSave);
    $(document).on("click", ".scape-new", handleArticleScrape);

    initPage();

    function initPage() {
        articleContainer.empty();
        $.get("/api/headLines?saved=false")
            .then(function (data) {
                if (data && data.length) {
                    renderArticles(data);
                } else {
                    renderEmpty();
                }
            });

    }

    function renderArticles(articles) {
        var articlesCards = [];

        for (var i = 0; i < articles.length; i++) {
            articlesCards.push(createCard(articles[i]));
        }
        articleContainer.append(articleCards);

    }

    function createCard(article) {
        var card =
            $(["<div class='card'>",
                "<div class='card-title'>",
                "<h3>",
                article.headLine,
                "<a class=btn btn-success save'>",
                "Save Article",
                "</a>",
                "</h3>",
                "</div>",
                "<div class='card-body'>",
                article.summary,
                "</div>",
                "</div>"
            ].join(""));

        card.data("_id", article._id);

        return card;
    }

    function renderEmpty() {

    }
})