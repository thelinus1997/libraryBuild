import * as React from "react";

interface Props {
  visible: boolean;
  text: string;
}

export default function Notification({ visible, text }: Props): JSX.Element {
  if (!visible) {
    return <></>;
  }

  return (
    <div className="z-50 fixed bottom-5 left-5 w-1/5 h-2/12 bg-white text-black rounded p-2">
      {text}
    </div>
  );
}
