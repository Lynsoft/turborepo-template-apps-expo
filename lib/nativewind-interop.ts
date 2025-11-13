import { Image } from "expo-image";
import { cssInterop } from "nativewind";

// Configure NativeWind className support for expo-image
cssInterop(Image, {
  className: {
    target: "style",
  },
});
