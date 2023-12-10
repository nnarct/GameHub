import { Unity, useUnityContext } from "react-unity-webgl";

const BrickBreaker = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "brickBreaker/Build/brickBreaker.loader.js",
    dataUrl: "brickBreaker/Build/brickBreaker.data",
    frameworkUrl: "brickBreaker/Build/brickBreaker.framework.js",
    codeUrl: "brickBreaker/Build/brickBreaker.wasm",
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

export default BrickBreaker;
