import type { DotLottieWC } from "@lottiefiles/dotlottie-wc";
import '@lottiefiles/dotlottie-wc';

function startLottie(element: DotLottieWC) {
  element.dotLottie?.setFrame(0);
  element.dotLottie?.unfreeze();
  element.dotLottie?.play();
  console.log(element.dotLottie?.isPlaying);
}

export { startLottie }
