import { Plugin } from 'obsidian';
import { HelloWorldView, VIEW_TYPE_HELLO_WORLD } from './HWView';

export default class MyPlugin extends Plugin {
    async onload() {
        console.log('Loading MyPlugin...');

        this.registerView(
            VIEW_TYPE_HELLO_WORLD,
            (leaf) => new HelloWorldView(leaf)
        );

        // Add command to open the Hello World view
        this.addCommand({
            id: 'open-hello-world-view',
            name: 'Open Hello World View',
            callback: () => {
                this.activateView();
            }
        });

        // You can open the view automatically if needed
        // this.activateView();
    }

    async activateView() {
        this.app.workspace.detachLeavesOfType(VIEW_TYPE_HELLO_WORLD);

        const rightLeaf = this.app.workspace.getRightLeaf(false);
        if (rightLeaf) {
            await rightLeaf.setViewState({
                type: VIEW_TYPE_HELLO_WORLD,
                active: true,
            });
        }
        this.app.workspace.revealLeaf(
            this.app.workspace.getLeavesOfType(VIEW_TYPE_HELLO_WORLD)[0]
        );
    }

    onunload() {
        this.app.workspace.detachLeavesOfType(VIEW_TYPE_HELLO_WORLD);
    }
}
