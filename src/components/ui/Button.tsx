import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface Common {
  variant?: Variant;
  size?: "md" | "sm";
  block?: boolean;
  children: ReactNode;
}

type LinkProps = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;
type BtnProps = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button(props: LinkProps | BtnProps) {
  const { variant = "primary", size = "md", block, children, ...rest } = props;
  const cls = `btn btn--${variant}${size === "sm" ? " btn--sm" : ""}${block ? " btn--block" : ""}`;
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchor } = rest as Omit<LinkProps, keyof Common>;
    return (
      <a className={cls} href={href} {...anchor}>
        {children}
      </a>
    );
  }
  const { type = "button", ...button } = rest as Omit<BtnProps, keyof Common>;
  return (
    <button className={cls} type={type} {...button}>
      {children}
    </button>
  );
}
