document.addEventListener('DOMContentLoaded', async () => {
    const articleList = document.getElementById('articleList');

    try {
        const response = await fetch('./articles.json');
        const articles = await response.json();

        articles.sort((a, b) => b.localeCompare(a)); // Sort articles in descending order (newest first)

        articles.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');

            link.href = `articles/${article}.html`;
            link.textContent = article.replace(/_/g, ' ');

            listItem.appendChild(link);
            articleList.appendChild(listItem);
        });
    } catch (err) {
        console.error('Error fetching articles:', err);
    }
});
