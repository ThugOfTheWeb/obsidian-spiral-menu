import { ItemView, WorkspaceLeaf } from 'obsidian';
import HelloWorld from './ui/HelloWorld.svelte';

export const VIEW_TYPE_HELLO_WORLD = "hello-world-view";

export class HelloWorldView extends ItemView {
    component: HelloWorld | undefined;

/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Constructs a new HelloWorldView.
     *
     * @param leaf - The workspace leaf for this view.
     */
/******  3c4bdd9b-22d1-4376-972b-1e44596e7465  *******/
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType() {
        return VIEW_TYPE_HELLO_WORLD;
    }

    getDisplayText() {
        return "Hello World View";
    }

    async onOpen() {
        this.component = new HelloWorld({
            target: this.contentEl,
        });
    }

    async onClose() {
        // Clean up the component when the view is closed
        if (this.component) {
            this.component.$destroy();
        }
    }
}
