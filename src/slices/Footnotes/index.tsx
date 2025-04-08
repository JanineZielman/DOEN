import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Footnotes`.
 */
export type FootnotesProps = SliceComponentProps<Content.FootnotesSlice>;

/**
 * Component for "Footnotes" Slices.
 */
const Footnotes: FC<FootnotesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footnotes (variation: {slice.variation}) Slices
    </section>
  );
};

export default Footnotes;
