import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { Article } from '../view/news/article';
import type { SourceItem } from '../view/sources/source';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourcesContainer = document.querySelector<HTMLElement>('.sources');

        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: MouseEvent) => this.controller.getNews(e, (data: { articles: Article[] }) => this.view.drawNews(data)));

        }

        this.controller.getSources((data: { sources: SourceItem[] }) => this.view.drawSources(data));
    }
}

export default App;
