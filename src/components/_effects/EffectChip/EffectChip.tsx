import { EffectStyles } from "@/components/_effects/EffectChip/constants";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";

interface EffectChipProps {
  effect: keyof typeof EffectStyles;
}

const EffectChip = ({ effect }: EffectChipProps) => {
  return (
    <div
      className={`px-4 py-2 bg-static-white rounded-lg ${EffectStyles[effect]}`}
    >
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className="text-label-strong"
      >
        Effect Chip
      </Paragraph>
    </div>
  );
};

export default EffectChip;
