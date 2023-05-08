import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dot } from "./icons/Dot";
import { VerticalLine } from "./icons/VerticalLine";

type StepTitleProps = {
  active: boolean;
  title: string;
};

type StepsLayoutProps = {
  children: ReactNode;
};

export const StepTitle = ({ active, title }: StepTitleProps) => {
  return (
    <h2
      className={`text-md lg:text-xl ${
        active
          ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          : "text-zinc-100"
      }`}
    >
      {title}
    </h2>
  );
};

export const StepsLayout = ({ children }: StepsLayoutProps) => {
  const router = useRouter();

  const activeOne = router.pathname === "/step-one";
  const activeTwo = router.pathname === "/step-two";
  const activeAnswers = router.pathname === "/your-answers";

  return (
    <article className="flex justify-start lg:gap-28 min-w-[72%] lg:min-w-[82%]">
      <div className="flex flex-col px-8 py-6 mx-20 h-[200px] border-r-2 border-[#8586887c] border-dashed">
        <Link href="/step-one">
          <div className="flex items-center gap-4">
            <Dot active />
            <StepTitle active={activeOne} title="Step 1" />
          </div>
        </Link>
        <VerticalLine active={activeTwo || activeAnswers} />
        <Link href="/step-two">
          <div className="flex items-center gap-4">
            <Dot active={activeTwo || activeAnswers} />
            <StepTitle active={activeTwo} title="Step 2" />
          </div>
        </Link>
        <VerticalLine active={activeAnswers} />
        <Link href="/your-answers">
          <div className="flex items-center gap-4">
            <Dot active={activeAnswers} />
            <StepTitle active={activeAnswers} title="Answers" />
          </div>
        </Link>
      </div>
      <form>{children}</form>
    </article>
  );
};
