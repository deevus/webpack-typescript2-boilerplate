declare module "webpack-merge" {
    import {Configuration} from "webpack";

    function Merge(...configs: Configuration[]): Configuration;

    export = Merge;
}