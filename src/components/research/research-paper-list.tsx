import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import ResearchPaperListItem, {
  type ResearchPaperListItemProps,
} from "@/components/research/research-paper-list-item";

export interface ResearchPaperListProps {
  title: string;
  details: ResearchPaperListItemProps[];
}

export default function ResearchPaperList(
  props: ResearchPaperListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
      <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-accent"
        ></motion.div>
        <ul className="ml-4 w-full items-center">
          {props.details.map((_details, index) => (
            <ResearchPaperListItem key={index} {..._details} />
          ))}
        </ul>
      </div>
    </div>
  );
}