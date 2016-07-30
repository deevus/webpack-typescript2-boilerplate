declare module "webpack-fail-plugin" {
    import {Plugin} from "webpack";

    function WebpackFailPlugin(): Plugin;

    export = WebpackFailPlugin;
}