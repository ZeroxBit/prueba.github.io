export interface ResponsiveImage {
  src: string;
  minWidth: string;
}

export interface Responsive {
  responsive?: ResponsiveImage[];
}

export interface Image extends Responsive {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}
