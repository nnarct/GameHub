import { Unity, useUnityContext } from "react-unity-webgl";

const PuzzleHouse = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "puzzleHouse/Build/puzzleHouse.loader.js",
    dataUrl: "puzzleHouse/Build/puzzleHouse.data",
    frameworkUrl: "puzzleHouse/Build/puzzleHouse.framework.js",
    codeUrl: "puzzleHouse/Build/puzzleHouse.wasm",
  });

  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center justify-center pb-8">
      <Unity
        unityProvider={unityProvider}
        style={{
          borderRadius: "16px",
          width: "1280px",
          height: "720px",
        }}
      />
    </div>
  );
};

export default PuzzleHouse;
