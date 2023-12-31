import ReactMarkdown from "react-markdown";
import { cva, type VariantProps } from "class-variance-authority";
import remarkGfm from "remark-gfm";

import { cn } from "@lib/clsx";

import { PrimaryHeading } from "@components/headings/primary-heading";
import { QuaternaryHeading } from "@components/headings/quaternary-heading";
import { QuinaryHeading } from "@components/headings/quinary-heading";
import { SecondaryHeading } from "@components/headings/secondary-heading";
import { TertiaryHeading } from "@components/headings/tertiary-heading";

const paragraphVariants = cva(
  [
    "w-full flex flex-col items-stretch justify-start",
    "[&>*:not(:first-child)]:mt-[0.625rem] md:[&>*:not(:first-child)]:mt-4 lg:[&>*:not(:first-child)]:mt-5",
  ],
  {
    variants: {
      intent: {
        primary: "text-primary",
        secondary: "text-water",
        tertiary: "text-land",
        white: "text-white",
        black: "text-black",
      },
      alignment: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      small: {
        true: "[&_p]:text-[0.8125rem] md:[&_p]:text-sm",
      },
      titleParagraph: {
        true: "[&_p]:font-medium [&_p]:leading-snug md:[&_p]:text-lg",
      },
    },
  }
);

const paragraph = (
  props: VariantProps<typeof paragraphVariants>,
  className?: string
) => cn(paragraphVariants({ ...props, className }));

interface Props extends VariantProps<typeof paragraphVariants> {
  children: string;
  className?: string;
}

const Paragraph: React.FC<Props> = ({
  children,
  alignment,
  intent,
  small,
  titleParagraph,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={paragraph(
        { alignment, intent, small, titleParagraph },
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => (
            <a
              {...props}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer break-words font-semibold text-primary underline underline-offset-2 transition-[color] duration-200 ease-in-out [hyphens:auto]"
            >
              {props.children}
            </a>
          ),
          h1: (props) => (
            <PrimaryHeading
              intent={intent}
              alignment={alignment}
              className={cn("!mt-12 md:!mt-14 lg:!mt-16")}
            >
              {props.children as string}
            </PrimaryHeading>
          ),
          h2: (props) => (
            <SecondaryHeading
              intent={intent}
              alignment={alignment}
              className={cn("!mt-10 md:!mt-12 lg:!mt-14")}
            >
              {props.children as string}
            </SecondaryHeading>
          ),
          h3: (props) => (
            <TertiaryHeading
              intent={intent}
              alignment={alignment}
              className={cn("!mt-8 md:!mt-10 lg:!mt-12")}
            >
              {props.children as string}
            </TertiaryHeading>
          ),
          h4: (props) => (
            <QuaternaryHeading
              intent={intent}
              alignment={alignment}
              className="!mt-6 md:!mt-8 lg:!mt-10"
            >
              {props.children as string}
            </QuaternaryHeading>
          ),
          h5: (props) => (
            <QuinaryHeading
              intent={intent}
              alignment={alignment}
              className={cn("!mt-6 md:!mt-8 lg:!mt-10")}
            >
              {props.children as string}
            </QuinaryHeading>
          ),
          h6: (props) => (
            <QuinaryHeading
              intent={intent}
              alignment={alignment}
              className={cn("!mt-6 md:!mt-8 lg:!mt-10")}
            >
              {props.children as string}
            </QuinaryHeading>
          ),
          p: (props) => (
            <p
              {...props}
              className="font-sans text-base font-normal leading-normal tracking-wide"
            >
              {props.children}
            </p>
          ),
          img: (props) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={props.src as string}
              alt={props.alt as string}
              className="my-6 w-full "
            />
          ),
          ol: (props) => (
            <ol
              {...props}
              className="flex flex-col items-start justify-start gap-x-3 pl-6 [&>li]:text-sm [&>li]:leading-snug"
            >
              {props.children}
            </ol>
          ),
          ul: (props) => (
            <ul
              {...props}
              className="flex list-disc flex-col items-start justify-start gap-y-1 pl-6 [&>li]:leading-snug "
            >
              {props.children}
            </ul>
          ),
          strong: (props) => (
            <strong {...props} className="font-medium">
              {props.children}
            </strong>
          ),
          b: (props) => (
            <b {...props} className="font-medium">
              {props.children}
            </b>
          ),
          em: (props) => (
            <em {...props} className="italic">
              {props.children}
            </em>
          ),
          i: (props) => (
            <i {...props} className="italic">
              {props.children}
            </i>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export { Paragraph };
