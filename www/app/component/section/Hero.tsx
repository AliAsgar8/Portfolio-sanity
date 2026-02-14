import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "next-sanity";

type HeroProps = {
  title: string;
  content: PortableTextBlock[];
};

export default function Hero({ content }: HeroProps) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-7xl font-semibold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="bg-linear-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-4xl font-medium">
          {children}
        </h2>
      ),

      normal: ({ children }) => <p className="text-xl">{children}</p>,
    },
  };

  return (
    <div className="container grid grid-cols-12 h-screen items-start ">
      <div className="grid col-span-6 gap-y-5 pt-40">
        <PortableText value={content} components={components} />
      </div>
      <div className="grid col-span-6"></div>
    </div>
  );
}
