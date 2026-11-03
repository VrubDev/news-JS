import type { Article } from './article';
import './news.css';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            return;
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photo = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            const author = newsClone.querySelector('.news__meta-author');
            if (author) author.textContent = item.author || item.source.name;

            const date = newsClone.querySelector('.news__meta-date');
            if (date) {
                date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const title = newsClone.querySelector('.news__description-title');
            if (title) title.textContent = item.title;

            const source = newsClone.querySelector('.news__description-source');
            if (source) source.textContent = item.source.name;

            const desc = newsClone.querySelector('.news__description-content');
            if (desc) desc.textContent = item.description;

            const link = newsClone.querySelector('.news__read-more a');
            if (link) link.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsSelector = document.querySelector('.news');
        if (newsSelector) {
            newsSelector.innerHTML = '';
            newsSelector.appendChild(fragment);
        }
    }
}

export default News;
