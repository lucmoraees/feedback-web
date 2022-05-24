import { CloseButton } from "../../CloseButton";
import svgSuccess from '../../../assets/success.svg';

interface Props {
  onFeedbackrestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackrestartRequested }: Props) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[340px]">
         <img src={svgSuccess} alt="Image success" />
         <span className="text-xl mt-2">Agradecemos o feedback!</span>
         <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outilne-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onFeedbackrestartRequested}
        >
           Quero enviar outro
         </button>
      </div>
    </>
  );
};
