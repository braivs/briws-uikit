import * as React from "react";
import { AnchorHTMLAttributes } from "react";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : 'a'/*NavLink*/;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag {...props} {...otherProps} />;
};

export default MenuLink;
