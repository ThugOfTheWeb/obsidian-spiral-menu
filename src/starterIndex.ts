import { Plugin } from "obsidian";
import SlidingView, { SLIDING_VIEW_ID } from "./views/SlidingView";
export default class ShootingStarMenu extends Plugin {
    async onload() {
        console.log("Plugin loaded!");

        this.registerView(
            SLIDING_VIEW_ID,
            (leaf) => new SlidingView(leaf)
        );
        this.addCommand({
            id: "open-sliding-view",
            name: "Open Sliding View",
            checkCallback: (checking: boolean) => {
                const leaves = this.app.workspace.getLeavesOfType(SLIDING_VIEW_ID);
                if (leaves.length > 0) {
                    if (!checking) {
                        this.app.workspace.detachLeavesOfType(SLIDING_VIEW_ID);
                    }
                    return true;
                } else {
                    if (!checking) {
                        const leaf = this.app.workspace.getRightLeaf(true);
                        leaf?.setViewState({ type: SLIDING_VIEW_ID, active: true });
                    }
                    return true;
                }

            },
        })
    }

    onunload() {
        this.app.workspace.detachLeavesOfType(SLIDING_VIEW_ID);

        console.log("Plugin unloaded!");
    }
}
