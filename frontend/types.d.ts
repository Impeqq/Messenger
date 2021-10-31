declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.jpeg";
declare module "*.png";

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
