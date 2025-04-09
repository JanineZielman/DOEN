import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

/**
 * Component for "Table" Slices.
 */
const Table: FC<TableProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <table>
        <th>{slice.primary.title}</th>
        <tr>
          <div>
            <PrismicRichText field={slice.primary.vorm} />
          </div>
          <div>
            <PrismicRichText field={slice.primary.focus} />
          </div>
        </tr>
        <tr>
          <PrismicRichText field={slice.primary.link} />
        </tr>   
      </table>
    </section>
  );
};

export default Table;
