import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface Props {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
  isSendingFeedback: boolean;
}

export function ScreenshotButton({ screenshot, setScreenshot, isSendingFeedback }: Props) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

  async function handleTakeScreenshot() {
    try {
      setIsTakingScreenshot(true);

      const canvas = await html2canvas(document.querySelector('html')!);

      const base64Image = canvas.toDataURL('image/png');

      setScreenshot(base64Image);
    } catch (error) {
      alert('Erro ao tirar screenshot da tela!');
    } finally {
      setIsTakingScreenshot(false);
    }
  }


  return (
    <>
      {screenshot ? (
        <button
          type="button"
          onClick={() => setScreenshot(null)}
          className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
          style={{
            backgroundImage: `url(${screenshot})`,
          }}
          disabled={isSendingFeedback}
        >
          <Trash weight="fill" />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleTakeScreenshot}
          disabled={isSendingFeedback}
          className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outilne-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          {isTakingScreenshot ? (
            <Loading />
          ) : (
            <Camera className="w-6 h-6 text-zinc-100" />
          )}
        </button>
      )}
    </>
  );
};

export default ScreenshotButton;
