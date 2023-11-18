import { Unity, useUnityContext } from "react-unity-webgl";

const FlappyBird = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "flappyBird/Build/flappyBird.loader.js",
    dataUrl: "flappyBird/Build/flappyBird.data",
    frameworkUrl: "flappyBird/Build/flappyBird.framework.js",
    codeUrl: "flappyBird/Build/flappyBird.wasm",
  });

  return (
    <div className="bg-[#1a1a1a] min-h-screen flex flex-col items-center justify-center pb-8">
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

export default FlappyBird;
