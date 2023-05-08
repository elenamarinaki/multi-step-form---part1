import Link from "next/link";

type NavigationButtonsProps = {
  back: string;
  next: string;
  home?: boolean;
  stepIsValidated?: boolean;
};

export const NavigationButtons = ({
  back,
  next,
  home,
  stepIsValidated = true,
}: NavigationButtonsProps) => {
  return (
    <div className="absolute bottom-[100px] flex gap-80">
      <Link href={back}>
        <button className="px-2 py-1 border-2 rounded-lg text-[18px] lg:text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500">
          Back
        </button>
      </Link>
      <Link href={next}>
        <button
          disabled={!stepIsValidated}
          className="px-2 py-1 rounded-lg text-[18px] lg:text-[24px] text-slate-50 bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500"
        >
          {home ? "Home" : "Next"}
        </button>
      </Link>
    </div>
  );
};
