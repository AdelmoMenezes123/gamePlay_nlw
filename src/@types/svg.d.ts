declare module "*.svg" {
    import { React } from "rect";
    import { SvgProps } from "react-native-svg";

    const content: Rect.FC<SvgProps>;
    export default content;
};