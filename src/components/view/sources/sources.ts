import './sources.css';
import type { SourceIdentity } from '../../../types';
import { getElement, getTemplate } from '../dom';

class Sources {
    public draw(data: ReadonlyArray<SourceIdentity>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemplate = getTemplate('sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemplate.content.cloneNode(true) as DocumentFragment;

            getElement<HTMLElement>(sourceClone, '.source__item-name').textContent = item.name;
            getElement<HTMLButtonElement>(sourceClone, '.source__item').dataset.sourceId = item.id;

            fragment.append(sourceClone);
        });

        getElement<HTMLElement>(document, '.sources').replaceChildren(fragment);
    }
}

export default Sources;
