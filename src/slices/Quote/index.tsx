import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./Styles.module.scss"

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote: FC<QuoteProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.quoteWrapper}
    >
      <div className={styles.quote}>
        <PrismicRichText field={slice.primary.quote} />
      </div>
      <div className={styles.source}>
        <PrismicRichText field={slice.primary.source} />
      </div>
    </section>
  );
};

export default Quote;
