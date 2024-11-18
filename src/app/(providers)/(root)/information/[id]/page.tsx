import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import Page from "@/components/Layouts/Page/Page";

export default function InformationPage() {
  return (
    <Page>
      <div className=" flex justify-between items-center w-full h-[58px] shrink-0">
        <button>
          <SVGIcon icon={"ArrowLeft"} />
        </button>
        <div className="flex gap-2">
          <button>
            <SVGIcon icon={"StarLine"} />
          </button>
          <button>
            <SVGIcon icon={"Share"} />
          </button>
        </div>
      </div>
    </Page>
  );
}
