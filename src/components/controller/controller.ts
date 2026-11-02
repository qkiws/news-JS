import AppLoader from './appLoader';
import { NewsEndpoint } from '../../types';
import type { ApiCallback, Article, Source } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: ApiCallback<Source>): void {
        super.getResp<Source>({ endpoint: NewsEndpoint.Sources }, callback);
    }

    public getNews(event: MouseEvent, callback: ApiCallback<Article>): void {
        const sourceContainer = event.currentTarget;
        if (!(sourceContainer instanceof HTMLElement)) {
            return;
        }

        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }

        const sourceItem = target.closest<HTMLElement>('.source__item');
        if (!sourceItem || !sourceContainer.contains(sourceItem)) {
            return;
        }

        const sourceId = sourceItem.dataset.sourceId;
        if (!sourceId || sourceContainer.dataset.source === sourceId) {
            return;
        }

        sourceContainer.dataset.source = sourceId;
        super.getResp<Article>(
            {
                endpoint: NewsEndpoint.Everything,
                options: { sources: sourceId },
            },
            callback
        );
    }
}

export default AppController;
