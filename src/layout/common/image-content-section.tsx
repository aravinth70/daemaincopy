import { cva, type VariantProps } from "class-variance-authority";

import {
  ContentGroup,
  type ContentGroupType,
} from "@layout/common/groups/content-group";

import { ImageComponent } from "@components/image-component";

const section = cva(["w-full grid main-grid-columns auto-rows-min gap-y-9"], {
  variants: {
    withBg: {
      true: "bg-lightWater py-12 xxl:py-16",
    },
  },
  defaultVariants: {
    withBg: false,
  },
});

interface Props extends VariantProps<typeof section>, ContentGroupType {
  image: Image;
}

const ImageContentSection: React.FC<Props> = ({
  image,
  withBg,
  ...contentGroupProps
}: Props): JSX.Element => {
  return (
    <section className={section({ withBg })}>
      <div className="col-full h-full w-full md:col-content lg:col-[content-start_/col-end_4] lg:py-12 lg:pr-12 xl:py-14 xl:pr-14 2xl:py-24 2xl:pr-16">
        <ContentGroup {...contentGroupProps} />
      </div>
      <div className="col-content aspect-square w-full sm:aspect-[4_/_3] md:aspect-video lg:col-full-end-half lg:aspect-auto lg:h-full xl:col-content-end-half">
        <ImageComponent image={image} sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
    </section>
  );
};

export type { Props as ImageContentSectionType };
export { ImageContentSection };
