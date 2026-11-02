import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { getElement } from '../view/dom';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        getElement<HTMLElement>(document, '.sources').addEventListener('click', (event: MouseEvent) =>
            this.controller.getNews(event, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
