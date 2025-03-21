// import { IconCloud } from "@/registry/magicui/icon-cloud";\
import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  'javascript', 'typescript', 'html5', 'css3', 'react', 'express', 'mongodb', 'firebase', 'java', 'github', 'git', 'flutter', 'python', 'c', 'sql', 'nodejs',
  'figma'
];

export function SkillsGlobe() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
