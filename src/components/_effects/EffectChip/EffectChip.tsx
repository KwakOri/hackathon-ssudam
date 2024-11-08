import { EffectStyles } from "@/components/_effects/EffectChip/constants";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";

interface EffectChipProps {
  effect: keyof typeof EffectStyles;
}

const EffectChip = ({ effect }: EffectChipProps) => {
  return (
    <div
      className={`px-4 py-1 bg-static-white rounded-lg ${EffectStyles[effect]}`}
    >
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className="text-label-strong"
      >
        {effect}
      </Paragraph>
    </div>
  );
};

export default EffectChip;
