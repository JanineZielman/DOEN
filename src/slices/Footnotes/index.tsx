import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      className="footnotes"
    >
      <h3>Footnotes</h3>
      <div>
        <PrismicRichText field={slice.primary.footnotes} />
      </div>
    </section>
  );
};

export default Footnotes;
