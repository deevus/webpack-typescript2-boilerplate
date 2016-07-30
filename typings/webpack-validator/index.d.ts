declare module "webpack-validator" {
    import {Configuration} from "webpack";

    function Validate(config: Configuration): Configuration;

    export = Validate;
}