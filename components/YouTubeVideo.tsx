import { WebView } from "react-native-webview";

const YouTubeVideo = ({ videoUrl }: any) => {
  return (
    <WebView
      style={{ height: 600 }}
      javaScriptEnabled={true}
      source={{ uri: videoUrl }}
    />
  );
};

export default YouTubeVideo;
