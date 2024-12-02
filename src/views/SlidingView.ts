import { ItemView, Notice, WorkspaceLeaf } from "obsidian";
import SlidingPane from "../components/SlidingPane.svelte";

export const SLIDING_VIEW_ID = "sliding-view";
export default class SlidingView extends ItemView {
    //Usual Setup On Top
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }
    getViewType(): string {
        return SLIDING_VIEW_ID;
    }
    getDisplayText(): string {
        return "Sliding View";
    }
    getIcon(): string {
        return "dice";
    }
    //Here starts the good stuff
    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();
        
        const app = new SlidingPane({ 
            target: container,
            props: {
                onButtonClick: () => {
                    new Notice("Button Clicked via Svelte");
                }
            }
        });
        console.log(app); 
        console.log("Sliding View Opened");
    }

    async onClose() {
        console.log("Sliding View Closed");
    }

}