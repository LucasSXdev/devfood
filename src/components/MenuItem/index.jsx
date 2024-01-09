import { LinkArea, LinkIcon } from "./MenuItem.styled";
export default function MenuItem({ link, icon }) {
  return (
    <>
      <LinkArea href={link}>
        <LinkIcon>{icon}</LinkIcon>
      </LinkArea>
    </>
  );
}
