import type {
  HomePageSectionsAppointmentsSection,
  PagesPageSectionsAppointmentsSection,
} from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Section from "./Section";
import { tinaField } from "tinacms/dist/react";

type AppointmentsSectionProps =
  | PagesPageSectionsAppointmentsSection
  | HomePageSectionsAppointmentsSection;

const components = {
  h2: (props: any) => {
    return (
      <h2 className="uppercase text-5xl font-bold text-[#c49800]" {...props}>
        {props.children}
      </h2>
    );
  },
  p: (props: any) => {
    return (
      <p className="font-josefin-sans font-bold mb-4 text-[#a4a4a4]" {...props}>
        {props.children}
      </p>
    );
  },
  li: (props: any) => {
    return (
      <li className="list-disc" {...props}>
        {props.children}
      </li>
    );
  },
};

export default function AppointmentsSection(props: AppointmentsSectionProps) {
  return (
    <Section className="bg-black relative">
      <h2
        data-tina-field={tinaField(props, "title")}
        className="font-righteous uppercase text-3xl font-bold text-[#c49800] text-center"
      >
        {props.title}
      </h2>
      {props.appointmentsBlocks?.map((block, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-4 items-center justify-around sm:flex-row"
          >
            {block?.image && props.title && (
              <img
                data-tina-field={tinaField(block, "image")}
                src={block?.image}
                alt={props.title}
                width={160}
                height={90}
                loading="lazy"
                decoding="async"
                className="mask mask-square shrink-0"
              />
            )}
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 pb-4">
                <h3
                  data-tina-field={tinaField(block, "title")}
                  className="font-josefin-sans capitalize text-2xl font-bold text-white"
                >
                  {block?.title}
                </h3>
                <a
                  href="/contact"
                  data-theme="light"
                  className="btn mt-4 btn-block max-w-[11rem] sm:justify-self-end bg-[#c49800] text-white order-3 sm:order-none"
                >
                  Start Your Journey
                </a>
                <div>
                  <p className="text-[#a4a4a4]">
                    <span>
                      <span data-tina-field={tinaField(block, "duration")}>
                        {block?.duration}
                      </span>
                      <span> | </span>
                      <span data-tina-field={tinaField(block, "cost")}>
                        {block?.cost}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div data-tina-field={tinaField(block, "content")}>
                <TinaMarkdown
                  content={block?.content}
                  components={components}
                />
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
