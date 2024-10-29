import { TextGenerateEffect } from "../ui/TextGenerateEffect";

export function TextGenerateEffectDemo({ words }) {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
