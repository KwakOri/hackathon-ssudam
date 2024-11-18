import Paragraph from "@/components/atoms/Paragraph";

interface DetailTextProps {
  title: string;
  content: string;
  content2?: string;
  warning?: string;
}

const DetailText = ({ title, content, content2, warning }: DetailTextProps) => {
  return (
    <div className="flex w-[303px] gap-5">
      <Paragraph
        fontSize="label"
        fontWeight="medium"
        className="text-label-alternative w-[60px] shrink-0"
      >
        {title}
      </Paragraph>
      <div className="flex flex-col flex-wrap gap-1">
        <Paragraph
          fontSize="label"
          fontWeight="medium"
          className="text-label-neutral"
        >
          {content}
        </Paragraph>
        {content2 && (
          <Paragraph
            fontSize="label"
            fontWeight="medium"
            className="text-label-neutral"
          >
            {content2}
          </Paragraph>
        )}
        {warning && (
          <Paragraph
            fontSize="caption2"
            fontWeight="medium"
            className="text-accent-red-normal"
          >
            {warning}
          </Paragraph>
        )}
      </div>
    </div>
  );
};

export default DetailText;
