import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { highlight } from "sugar-high";

function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;
  const baseClass =
    "text-woodsmoke-50 underline underline-offset-4 hover:text-brand-500 transition-colors";

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} className={baseClass}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} className={baseClass} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={baseClass}
    />
  );
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// function Code({ children, ...props }) {
//   const codeHTML = highlight(children);
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// }
export function Code({ children, className = "", ...props }) {
  const isBlock = className && className.startsWith("language-");

  if (isBlock) {
    const codeHTML = highlight(children);

    return (
      <code
        className={`${className} my-4 block overflow-x-auto rounded-lg bg-white p-4 text-sm`}
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  }

  return (
    <code className="rounded px-1 text-woodsmoke-100" {...props}>
      {children}
    </code>
  );
}
function Blockquote({ children }) {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:border-gray-600 dark:text-gray-400">
      {children}
    </blockquote>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, className: "text-woodsmoke-50 scroll-mt-20 font-semibold" },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

// function Paragraph({ children }) {
//   return (
//     <p className={cn("border border-red-500 text-woodsmoke-100")}>{children}</p>
//   );
// }
const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  // p: Paragraph,
  blockquote: Blockquote,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
