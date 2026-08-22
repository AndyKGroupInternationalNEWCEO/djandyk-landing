"use client";

import { useEffect, useRef } from "react";

type Props = {
  css: string;
  body: string;
  script: string;
};

export default function OpusNo1ViennaClient({ css, body, script }: Props) {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    // eslint-disable-next-line no-new-func
    const run = new Function(script);
    run();
  }, [script]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
