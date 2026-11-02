export function getElement<T extends Element>(root: ParentNode, selector: string): T {
    const element = root.querySelector<T>(selector);
    if (!element) {
        throw new Error(`Required element "${selector}" was not found`);
    }

    return element;
}

export function getTemplate(id: string): HTMLTemplateElement {
    return getElement<HTMLTemplateElement>(document, `#${id}`);
}
