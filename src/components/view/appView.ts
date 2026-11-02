import News from './news/news';
import Sources from './sources/sources';
import type { ApiResponse, Article, Source } from '../../types';

export class AppView {
    private readonly news: News;
    private readonly sources: Sources;

    public constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ApiResponse<Article>): void {
        this.news.draw(data.articles ?? []);
    }

    public drawSources(data: ApiResponse<Source>): void {
        this.sources.draw(data.sources ?? []);
    }
}

export default AppView;
