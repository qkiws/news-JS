import './news.css';
import type { Article } from '../../../types';
import { getElement, getTemplate } from '../dom';

class News {
    public draw(data: ReadonlyArray<Article>): void {
        const fragment = document.createDocumentFragment();
        const newsItemTemplate = getTemplate('newsItemTemp');

        data.slice(0, 10).forEach((item, index) => {
            const newsClone = newsItemTemplate.content.cloneNode(true) as DocumentFragment;
            const newsItem = getElement<HTMLElement>(newsClone, '.news__item');

            if (index % 2) {
                newsItem.classList.add('alt');
            }

            getElement<HTMLElement>(newsClone, '.news__meta-photo').style.backgroundImage = item.urlToImage
                ? `url("${item.urlToImage}")`
                : 'linear-gradient(135deg, #16213e, #0f3460)';
            getElement<HTMLElement>(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            getElement<HTMLElement>(newsClone, '.news__meta-date').textContent = new Date(
                item.publishedAt
            ).toLocaleDateString();
            getElement<HTMLElement>(newsClone, '.news__description-title').textContent = item.title;
            getElement<HTMLElement>(newsClone, '.news__description-source').textContent = item.source.name;
            getElement<HTMLElement>(newsClone, '.news__description-content').textContent =
                item.description ?? 'No description available.';

            const articleLink = getElement<HTMLAnchorElement>(newsClone, '.news__read-more a');
            articleLink.href = item.url;
            articleLink.rel = 'noopener noreferrer';

            fragment.append(newsClone);
        });

        getElement<HTMLElement>(document, '.news').replaceChildren(fragment);
    }
}

export default News;
